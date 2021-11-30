import React, { ReactElement,useState, useEffect} from 'react'
import { TopMenu } from '../components/TopMenu'
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';


interface Props {
    
}

//TODO Handle error or success for change password
function ChangeEmailPage(props: Props): ReactElement {
    let history = useHistory();

    const redirect = () => {
      history.push('/settings')
    }

    const [newEmail,setNewEmail] = useState("");
    const [userEmail,setUserEmail] = useState("");
    
    Auth.currentAuthenticatedUser().then((user)=> setUserEmail(user.attributes.email));


    function handleSubmit(e:any){
        e.preventDefault()
        
        //Todo send email await response then submit change.
    }



    return (
        <div className = "changeEmail">
            <TopMenu/>
            <div className = "changeEmail-Form">
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
                    label="New Email"
                    value = {newEmail} 
                    onChange = {(event) => setNewEmail(event.target.value)}
                    type ="password"
                    />
                </div>
                <Button type ="submit" variant= "contained">Submit</Button>
                
            </Box>
            </div>
            
            
  
        </div>

    )
}
export default withAuthenticator(ChangeEmailPage);
