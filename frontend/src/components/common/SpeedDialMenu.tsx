import React, { useEffect } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

export type action = {
    icon: React.ReactElement<SvgIconProps>;
    name: string;
    callback: any;
    color?: 'inherit' | 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
    hidden?: boolean; // hidden: undefinded = always show
}

interface Props {
    actions: action[];
    primaryIcon: React.ReactElement<SvgIconProps>;
    secondaryIcon: React.ReactElement<SvgIconProps>;
    hidden?: boolean;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    color?: 'inherit' | 'primary' | 'secondary' | 'default';
    showToolTip?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    speedDial: {
    },
  }),
);

const SpeedDialMenu = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden] = React.useState(false);
  
    useEffect(() => {
      handleClose();
    }, []);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <ClickAwayListener onClickAway={handleClose}>
        <div className={props.className}>
            <SpeedDial
                ariaLabel="SpeedDial"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon icon={props.primaryIcon} openIcon={props.secondaryIcon} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{ size: props.size, color: props.color}}
            >
                {props.actions.map((action) => { 
                  return (!action.hidden ? 
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen={props.showToolTip} // Tool tips should be one word verbs
                        FabProps={{ 
                          size: action.size? action.size : 'small', 
                          color: action.color
                        }}
                        onClick={()=>{
                            action.callback()
                        }}
                    /> : null
                  )}
                )}
            </SpeedDial>
        </div>
      </ClickAwayListener>
    )
}

export default SpeedDialMenu
