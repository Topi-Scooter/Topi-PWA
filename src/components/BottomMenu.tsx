import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SettingsIcon from '@material-ui/icons/Settings';

import BottomMenuSpeedDial from './BottomMenuSpeedDial';

import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
    
} // TODO Manage styles better
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
        
        extendedText: {
            marginLeft: theme.spacing(9),
            marginRight: theme.spacing(9),
        }
        
    }),
);


export function BottomMenu({}: Props): ReactElement {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="flex-end" direction="column" >

                <Grid item>
                    <BottomMenuSpeedDial />
                </Grid>

                <Grid item>
                    <Fab className={classes.fab} size="small">
                        <MyLocationIcon/>
                    </Fab>
                </Grid>

                <Grid container justify="center" alignItems="center" >
                    <Fab className={classes.fab} variant="extended" color="primary" size="large">
                        <span className={classes.extendedText}>
                            RIDE
                        </span>
                    </Fab>
                </Grid>

            </Grid>
        </div>
    )
}
