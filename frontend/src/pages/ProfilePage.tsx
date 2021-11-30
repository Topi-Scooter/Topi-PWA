import React, { ReactElement,useState } from 'react';
import { TopMenu } from '../components/TopMenu';
import { Auth } from 'aws-amplify';
import Avatar from '@mui/material/Avatar';

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
        <div className = "profile-div" >
            <TopMenu/>


            <h1>Profile Page</h1>
            <p> {email}</p>
            <p>{phoneNumber}</p>
        </div>
    )
}
