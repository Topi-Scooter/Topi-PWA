import React, { ReactElement, useContext } from 'react';
import { Card, CardContent, createStyles, Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
import DrawerMenu from './DrawerMenu';
import ScooterBattery from './common/ScooterBattery';
import { AppContext } from '../state/context';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            '& > *': {
                position: 'absolute',
                pointerEvents: 'none',
                width: "100%",
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
        cardRoot: {
            backgroundColor: Colors.blueGrey['50']
        },   
    }),
);

function RidingInfoCard(props: Props): ReactElement {
    const classes = useStyles();
    // TODO: get scooter name from scooter state
    const { state } = useContext(AppContext);
    // const batteryIcon = BatteryPercentagesIcons[state.scooter.batteryLevel];

    // const scooter = {name: "X3F23S"}
    const scooter = {name: state.scooter.bikeId};

    return (
        <div className={classes.root}>
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
                                <Typography variant="button" className={classes.headerText}>
                                    Scooter: {scooter.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    </div>    )
}

export default RidingInfoCard
