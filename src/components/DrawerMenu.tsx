import React, { ReactElement, useEffect, useState } from 'react'
import { SwipeableDrawer, Fab, Divider, ListItem, ListItemIcon, ListItemText, Grid } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { withRouter } from 'react-router-dom'
import {
    Menu as MenuIcon,
    AccountBox as AccountBoxIcon,
    Payment as PaymentIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    ContactSupport as ContactSupportIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';


interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        drawer: {
            width: 230
        }
    }),
);

function DrawerMenu(props: Props) : ReactElement {
    // const { history } = props
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowHeight, setWindowHeight] = useState<number>();

    useEffect(() => {
        const {innerHeight: height} = window;
        setWindowHeight(height)
    }, [setWindowHeight])

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setIsOpen(open);
      };
    
    const topMenuList = [
        { 
            text: "Home",
            icon: <HomeIcon/>
        },
        { 
            text: "Profile",
            icon: <AccountBoxIcon/>
        },
        { 
            text: "Payment Methods",
            icon: <PaymentIcon/>
        },
        { 
            text: "Settings",
            icon: <SettingsIcon/>
        },
    ];
    const bottomMenuList = [
        { 
            text: "About",
            icon: <InfoIcon/>
        },
        { 
            text: "Contact",
            icon: <ContactSupportIcon/>
        },
    ]

    return (
        
        <div className={classes.root}>
            <Fab size="small" color='primary' onClick={toggleDrawer(!isOpen)}>
                <MenuIcon/>
            </Fab>   
            <SwipeableDrawer
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >      
                <Grid 
                    container direction="column" 
                    justify="space-between" 
                    style={{height: windowHeight}} 
                    className={classes.drawer}
                >
                    <Grid item>
                        {topMenuList.map((item, index) => (
                            <div>
                                <ListItem button key={item.text} onClick={toggleDrawer(false)}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItem>
                                <Divider/>
                            </div>
                        ))}
                    </Grid>
                    <Grid item>
                        {bottomMenuList.map((item, index) => (
                            <div>
                                <Divider/>
                                <ListItem button key={item.text} onClick={toggleDrawer(false)}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItem>
                            </div>
                        ))}
                        <div >
                            {/* TODO: Might update to use MUI's <ExitToAppIcon/> */}
                            <AmplifySignOut onClick={toggleDrawer(false)}/>
                        </div>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
        </div>
    )
}

export default withRouter(DrawerMenu)
