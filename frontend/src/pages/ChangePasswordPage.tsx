import React, { ReactElement,useState, useEffect} from 'react'
import { TopMenu } from '../components/TopMenu'
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
interface Props {
    
}


function ChangePasswordPage(props: Props): ReactElement {

    const [password,setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function handleSubmit(e:any){
        e.preventDefault()
        console.log("submitted")
        
        Auth.currentAuthenticatedUser()
        .then(user => {
            return Auth.changePassword(user, password,newPassword );
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }



    return (
        <div className = "changePassword">
            <TopMenu/>
            <div className = "changePassword-Form">

                <form onSubmit = {handleSubmit}>
                    <label> Current Password: </label>
                        <input type = 'password'
                            value = {password} 
                            onChange = {(event) => setPassword(event.target.value)}
                            />

                    <label> New Password: </label>
                        <input type = 'password' 
                            value = {newPassword} 
                            onChange = {(event) => setNewPassword(event.target.value)}
                            />
                <Button type ="submit" variant= "contained">Submit</Button>
                </form>
            
            </div>
  
        </div>

    )
}
export default withAuthenticator(ChangePasswordPage);
