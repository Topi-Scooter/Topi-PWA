import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { classicNameResolver } from 'typescript';


interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            '& > *': {
                position: 'absolute',
                pointerEvents: 'none',
                top: 10,
                margin: theme.spacing(0),
            },
        },
        fab: {
            pointerEvents: 'auto',
            margin: theme.spacing(1),
            marginLeft: theme.spacing(3)
        },
        speedDial: {
            pointerEvents: 'auto',
            // margin: theme.spacing(3),
        },
        extendedText: {
            marginLeft: theme.spacing(9),
            marginRight: theme.spacing(9),
        }
        
    }),
);

/*
    !isRiding? <menuFAB/> : <rideCard>
*/
export const TopMenu = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab className={classes.fab} size="small">
                <MenuIcon/>
            </Fab>
        </div>
    )
}
