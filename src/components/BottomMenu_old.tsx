import React, { ReactElement } from 'react'
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import MyLocationIcon from '@material-ui/icons/MyLocation';

interface Props {
    
} // TODO Manage styles better
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            pointerEvents: 'none',
            '& > *': {
                position: 'absolute',
                pointerEvents: 'auto',
                bottom: 20,
                margin: theme.spacing(0),
            },
        },
        menuCenter: {
            alignContent: "center",
        },
        menuLeft: {
            float: "left",
            margin: theme.spacing(2),
        },
        menuRight: {
            float: "right",
            margin: theme.spacing(2),
        },
        extendedText: {
            margin: theme.spacing(9),
        }
        
    }),
);

export function BottomMenu({}: Props): ReactElement {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center" direction="row" >
                <Grid item xs={6}>
                    <Fab className={classes.menuLeft} size="small">
                        <WarningRoundedIcon></WarningRoundedIcon>
                    </Fab>
                </Grid>

                <Grid item xs={6}>
                    <Fab className={classes.menuRight} size="small">
                        <MyLocationIcon></MyLocationIcon>
                    </Fab>
                </Grid>

                <Grid item>
                    <Fab variant="extended" color="primary" size="large">
                        <span className={classes.extendedText}>
                            RIDE
                        </span>
                    </Fab>
                </Grid>
            </Grid>
        </div>
    )
}
