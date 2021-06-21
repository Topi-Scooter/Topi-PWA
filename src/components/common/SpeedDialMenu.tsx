import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

type action = {
    icon: React.ReactElement<SvgIconProps>;
    name: string;
    callback: any;
    color?: 'inherit' | 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
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
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: 'translateZ(0px)',
      flexGrow: 1,
    },
    speedDial: {
      // TODO might need to rethink this style if we use this in another palce other than bottomMenu
      marginRight: theme.spacing(-1),
    },
  }),
);

const SpeedDialMenu = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden] = React.useState(false);
    const [direction] = React.useState(props.direction);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className={props.className}>
            <SpeedDial
                ariaLabel="SpeedDial"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon icon={props.primaryIcon} openIcon={props.secondaryIcon} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={direction}
                FabProps={{ size: props.size, color: props.color}}
            >
                {props.actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    FabProps={{ 
                      size: action.size? action.size : 'small', 
                      color: action.color
                    }}
                    onClick={()=>{
                        handleClose();
                        action.callback();
                    }}
                />
                ))}
            </SpeedDial>
        </div>
    )
}

export default SpeedDialMenu
