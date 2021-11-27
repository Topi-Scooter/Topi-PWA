import React, { ReactElement,useState, useEffect} from 'react'
import { TopMenu } from '../components/TopMenu'
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



interface Props {
    
}

//TODO Handle error or success for change password
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
            <Box      
                component="form"
                sx={{
        '       & .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onSubmit = {handleSubmit}
                noValidate
                autoComplete="off"
            >   <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Current Password"
                    value = {password} 
                    onChange = {(event) => setPassword(event.target.value)}
                    type ="password"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="New Password"
                    value = {newPassword} 
                    onChange = {(event) => setNewPassword(event.target.value)}
                    type ="password"
                    />
                </div>
                <Button type ="submit" variant= "contained">Submit</Button>
                
            </Box>
            </div>
            
            
  
        </div>

    )
}
export default withAuthenticator(ChangePasswordPage);
