import React, { ReactElement, useContext, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Fab } from '@material-ui/core';
import SpeedDialMenu from './common/SpeedDialMenu';
import {
    Settings as SettingsIcon, 
    Close as CloseIcon,
    Highlight as HighlightIcon,
    Brightness4 as Brightness4Icon,
    Lock as LockIcon,
    LockOpen as LockOpenIcon,
    BugReport as BugReportIcon,
    MyLocation as MyLocationIcon,
} from '@material-ui/icons';
import { AppContext } from '../state/context';
import { setIsRiding } from '../state/reducer';
import { setBikeId } from '../state/reducer';
import { useGlobalThemeContext } from "../state/context"
import QrReader from 'react-qr-reader';

interface Props {
    onChangeMapStyle: any;
} 

// TODO Look into themes for whole app styling
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            '& > *': {
                position: 'absolute',
                pointerEvents: 'none',
                bottom: 0,
                margin: theme.spacing(0),
            },
        },
        fab: {
            pointerEvents: 'auto',
            margin: theme.spacing(3),
            marginTop: theme.spacing(-1),
            
        },
        speedDial: {
            pointerEvents: 'auto',
            margin: theme.spacing(3),
            marginRight: theme.spacing(2),
        },
        button: {
            display: "block",
            pointerEvents: 'auto',
            margin: theme.spacing(3),
            marginTop: theme.spacing(-1),
            width: "60%",
        }
        
    }),
);


export function BottomMenu(props: Props): ReactElement {
	const { state, dispatch } = useContext(AppContext);
	const { theme, setTheme } = useGlobalThemeContext();
    const classes = useStyles();
    const [isLocked, setIsLocked] = React.useState(false);
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const [scanQRCodeSelected, setQRCodeSelection] = React.useState(false);

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
    }
    
    const handleRide = async () => {
        // Call API to unlock scooter here
        dispatch(setIsRiding(true))
    };

    const handleBikeId = async (bikeId: string) => {
        dispatch(setBikeId(bikeId));
    }

    const handleCloseRide = async () => {
        // Call API to lock scooter here
        dispatch(setIsRiding(false))
    };

    const toggleLock = () => {
        setIsLocked(!isLocked);
    };
		
    const speedDialActions= 
    [
        {
            icon: <BugReportIcon/>,
            name: "Report Bug",
            callback: ()=>{},
        },
        {
            icon: isLocked ? <LockOpenIcon/> : <LockIcon/>,
            name: isLocked ? "Unlock Scooter" : "Lock Scooter",
            callback: ()=>{ toggleLock() },
            hidden: !state.user.isRiding,
        },
        {
            icon: <HighlightIcon/>,
            name: "Toggle Scooter Light",
            callback: ()=>{},
            hidden: !state.user.isRiding,
        },
        {
            icon: <Brightness4Icon/>,
            name: "Toggle Dark Mode",
            callback: ()=>{ toggleTheme() },
        },
    ]

    const handleErrorWebCam = (error: any) => {
        console.log(error);
    }
    
    const handleScanWebCam = (result: any) => {
        if (result){
            setScanResultWebCam(result);
            console.log("TESTING", result);
            setQRCodeSelection(false);
            var scannedBike = JSON.parse(result);
           
            // example of how to retrieve data from qr code
            console.log("TEST bikeid", scannedBike.bikeid);
            console.log("TEST slot", scannedBike.slot);
            
            handleBikeId(scannedBike.bikeid);
           
            state.user.isRiding ? handleCloseRide() : handleRide();
        }
    }

    const handleQRCodeSelection = (result: any) => {
        setQRCodeSelection(!scanQRCodeSelected);
    };
    
    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="flex-end" direction="column" >                
                {scanQRCodeSelected && <Grid container>
                        <QrReader
                            delay={300}
                            style={{width: '25%', position: 'absolute', left: '50%', top: '0%', transform: 'translate(-50%, -50%)'}}
                            onError={handleErrorWebCam}
                            onScan={handleScanWebCam}
                        />
                </Grid>}
                
                <Grid item>
                    <SpeedDialMenu
                        className={classes.speedDial}
                        primaryIcon={<SettingsIcon/>} 
                        secondaryIcon={<CloseIcon/>} 
                        actions={speedDialActions}
                        color="primary" 
                        size="small"
                    />
                </Grid>

                <Grid item>
                    <Fab className={classes.fab} size="small">
                        <MyLocationIcon/>
                    </Fab>
                </Grid>

                <Grid container justify="center" alignItems="center" >
                    <Button 
                        className={classes.button} 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        onClick={state.user.isRiding ? handleCloseRide : handleRide}
                    >
                        {state.user.isRiding ? "End Ride" : "Ride" } 
                        {/* Post repo migration test change */}
                    </Button>

                    <Button 
                            className={classes.button} 
                            onClick={handleQRCodeSelection}
                            variant="contained" 
                            color="primary" 
                            size="large" >
                            Scan QR Code
                        </Button>
                </Grid>

            </Grid>
        </div>
    )
}