import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DrawerMenu from './DrawerMenu';
import RidingInfoCard from './RidingInfoCard';
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
                top: 0,
            },
        },
        menu: {
            pointerEvents: 'auto',
            margin: theme.spacing(4),
        },
    }),
);

export const TopMenu = (props: Props) => {
    const classes = useStyles();
    const { state } = useContext(AppContext);

    if (state.isRiding) {
        return (
            <RidingInfoCard/>
        )
    }
    else {
        return (
            <div className={classes.root}>
                <div className={classes.menu}>
                    <DrawerMenu/>
                </div>
            </div>
        )
    }

    
}
