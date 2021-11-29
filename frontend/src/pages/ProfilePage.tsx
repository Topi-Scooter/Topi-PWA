import React, { ReactElement,useState } from 'react';
import { TopMenu } from '../components/TopMenu';
import { Auth } from 'aws-amplify';

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
    return (
        <div style= {textAlign} >
            <TopMenu/>
            <h1>Profile Page</h1>
            <p> {email}</p>
            <p>{phoneNumber}</p>
        </div>
    )
}
