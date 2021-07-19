/*
BottomMenu Options
Author: Allen
*/
import React, { ReactElement } from 'react'
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

// TODO: need different actions depending on riding || !riding

export function BottomMenu(props: Props): ReactElement {
    const classes = useStyles();
    const [isLocked, setIsLocked] = React.useState(false);
    const [isRiding, setIsRiding] = React.useState(false);
    
    const handleRide = () => {
        // Call API to unlock scooter here
        setIsRiding(true);
    };

    const handleCloseRide = () => {
        // Call API to lock scooter here
        setIsRiding(false);
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
            hidden: !isRiding,
        },
        {
            icon: <HighlightIcon/>,
            name: "Toggle Scooter Light",
            callback: ()=>{},
            hidden: !isRiding,
        },
        {
            icon: <Brightness4Icon/>,
            name: "Toggle Dark Mode",
            callback: ()=>{props.onChangeMapStyle('dark')},
        },
    ]

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="flex-end" direction="column" >

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
                        onClick={isRiding ? handleCloseRide : handleRide}
                    >
                        {isRiding ? "End Ride" : "Ride" }
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}
