import React, { useContext } from 'react'
import Fab from '@material-ui/core/Fab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import { Grid, Card, CardContent, IconButton, Typography } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
import ScooterBattery from './common/ScooterBattery';
import DrawerMenu from './DrawerMenu';
import { AppContext } from '../state/context';


interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root1: {
            flexGrow: 1,
            '& > *': {
                position: 'absolute',
                pointerEvents: 'none',
                width: "100%",
                top: 0,
            },
        },
        root2: {
            flexGrow: 1,
            '& > *': {
                position: 'absolute',
                pointerEvents: 'none',
                top: 0,
            },
        },
        headerText: {
            padding: theme.spacing(0.5),
        },
        card: {
            pointerEvents: 'auto',
            margin: theme.spacing(2),
        },
        menu: {
            pointerEvents: 'auto',
            margin: theme.spacing(4),
        },
        cardRoot: {
            backgroundColor: Colors.blueGrey['50']
        },   
    }),
);

/*
    !isRiding? <menuFAB/> : <rideCard>
*/
export const TopMenu = (props: Props) => {
    const classes = useStyles();
    const { state, dispatch } = useContext(AppContext);

    if (state.isRiding) {
        return (
            <div className={classes.root1}>
                <div>
                    <Card className={classes.card} classes={{ root: classes.cardRoot }} raised>
                        <CardContent>
                            <Grid container justify="center" alignItems="flex-start" direction="column">
                                <Grid container justify="space-between" direction="row">
                                    <Grid item>
                                        <DrawerMenu/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" className={classes.headerText}>
                                            Riding in Progress
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton>
                                            <ScooterBattery/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
    
                                <Grid container justify="flex-start" alignItems="flex-start" direction="row">
                                    <Grid item>
                                        {/* <Typography variant="button" className={classes.headerText}>
                                            Scooter: {scooter.name}
                                        </Typography> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
    else {
        // TODO fix window size issue
        return (
            <div className={classes.root2}>
                <div className={classes.menu}>
                    <DrawerMenu/>
                </div>
            </div>
        )
    }

    
}
