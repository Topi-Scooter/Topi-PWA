/*
BottomMenu Options
Author: Allen
*/
import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import MyLocationIcon from '@material-ui/icons/MyLocation';

import SpeedDialMenu, { action } from './common/SpeedDialMenu';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import HighlightIcon from '@material-ui/icons/Highlight';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import BugReportIcon from '@material-ui/icons/BugReport';

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
        extendedText: {
            marginLeft: theme.spacing(9),
            marginRight: theme.spacing(9),
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
                    <Fab 
                        className={classes.fab} 
                        variant="extended" 
                        color="primary" 
                        size="large" 
                        onClick={isRiding ? handleCloseRide : handleRide}
                    >
                        <span className={classes.extendedText}>
                            {isRiding ? "End Ride" : "Ride" }
                        </span>
                    </Fab>
                </Grid>

            </Grid>
        </div>
    )
}
