import React, { ReactElement,useState } from 'react';
import { TopMenu } from '../components/TopMenu';
import { Auth } from 'aws-amplify';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
interface Props {
    
}


export default function ProfilePage(props: Props): ReactElement {
    const [email,setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    Auth.currentAuthenticatedUser().then((user)=> setPhoneNumber(user.attributes.phone_number));
    Auth.currentAuthenticatedUser().then((user)=> setEmail(user.attributes.email));
    
    const textAlign={
        textAlign: 'center' as 'center'
    }
    // <Avatar
    // alt= {email}
    // src=""
    // sx={{ width: 128, height: 128 }}
    // />
    return (
        <div>
            <TopMenu/>
            <Paper
            sx ={{
                m:20,
                p:5,

            }}
            >
            <Box
            sx ={{
                m:1,
                p:1,
                alignItems: "center",
                justifyContent: "center",
                display: "flex"
            
            }}>
            
            <Avatar
            alt= "B"
            src= "/logo192.png"
            sx={{ 
                width: 100, 
                height: 100, 
                alignItems: "center",
                justifyContent: "center",
                

            }}
            />
            </Box>
            <br></br>
            <Box
            sx ={{
                m:1,
                p:1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"       
            }}>
    
            <h1>Profile Page</h1>
            <p> {email}</p>
            <p>{phoneNumber}</p>
            </Box>
            </Paper>
        </div>
    )
}
