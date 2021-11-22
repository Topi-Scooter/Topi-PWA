import React, { ReactElement, useContext, useEffect, useState } from 'react'
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
    SupervisorAccount as SupervisorAccountIcon,
    Settings as SettingsIcon,
    SupervisorAccount,
} from '@material-ui/icons';
import { AppContext } from '../state/context';


interface Props {
    history: any;
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
    const { history } = props;
    const classes =  useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowHeight, setWindowHeight] = useState<number>();
    const { state, dispatch } = useContext(AppContext);


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
            icon: <HomeIcon/>,
            onClick: () => history.push('/'),
        },
        { 
            text: "Profile",
            icon: <AccountBoxIcon/>,
            onClick: () => history.push('/profile'),
        },
        { 
            text: "Payment Methods",
            icon: <PaymentIcon/>,
            onClick: () => history.push('/payment'),
        },
        { 
            text: "Settings",
            icon: <SettingsIcon/>,
            onClick: () => history.push('/settings'),
        },
    ];
    const bottomMenuList = [
        { 
            text: "About",
            icon: <InfoIcon/>,
            onClick: () => history.push('/about'),
        },
        { 
            text: "Contact",
            icon: <ContactSupportIcon/>,
            onClick: () => history.push('/contact'),
        },
    ]
    if (state.user.isAdmin) {
        topMenuList.push(
            { 
                text: "Admin Panel",
                icon: <SupervisorAccountIcon/>,
                onClick: () => history.push('/admin'),
            },
        )
    }

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
                    key={'parentGrid'}
                    justify="space-between" 
                    style={{height: windowHeight}} 
                    className={classes.drawer}
                >
                    <Grid item key={'topMenuList'}>
                        {topMenuList.map((item, index) => (
                            <div>
                                <ListItem button key={item.text} onClick={() => { toggleDrawer(false); item.onClick(); }}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItem>
                                <Divider/>
                            </div>
                        ))}
                    </Grid>
                    <Grid item key={'bottomMenuList'}>
                        {bottomMenuList.map((item, index) => (
                            <div>
                                <Divider/>
                                <ListItem button key={item.text} onClick={() => { toggleDrawer(false); item.onClick(); }}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItem>
                            </div>
                        ))}
                        <div key={'Sign Out'}>
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
