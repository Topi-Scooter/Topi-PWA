import React, { ReactElement,useState } from 'react'
import { Link } from 'react-router-dom'
import { TopMenu } from '../components/TopMenu'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Auth } from 'aws-amplify';

interface Props {
    
}

function SettingsPage(props: Props): ReactElement {

    // function Clicked(e:any) {
    //     e.preventDefault()
    //     console.log(e)
    // }
    const textAlign={
        textAlign: 'center' as 'center'
    }
    const [email,setEmail] = useState("");
    Auth.currentAuthenticatedUser().then((user)=> setEmail(user.attributes.email));
    return (
        <div>
            <TopMenu/>
        <Box
        sx={{
            p: 1,
            my: 20,
            mx: 5
        }}>
        <Paper>
            <Grid item xs = {12}>
            <h1>Change Password</h1>
            <p> A strong password is at least 8 characters long.</p>
            <Button
                variant="outlined" 
                href="/changepassword"
               >Change</Button>
            </Grid>
        </Paper>
        <br></br>
        <Paper>
                <Grid item xs = {12}>
                <h1>Change Email</h1>
                <p> {email} </p>
                </Grid>
                <Grid>
                <Button
                    variant="outlined" 
                    href=""
                   >Change</Button>
                </Grid>
        </Paper>
        </Box>
        </div>
    )
    // return (
    //     <div>
    //         <TopMenu/>
    //         Settings Page
    //         <div>
    //             <Box
    //                 component="div"
    //                 sx={{
    //                     display: 'inline-flex',
    //                     p: 1,
    //                     mt: 10,
    //                     mx: 5
        
    //                 }}>
    //                 <div style= {textAlign}>
    //                 <h1>Change Password</h1>
    //                 <p> A strong password is at least 8 characters long. </p>
    //                 </div>
    //             </Box>
    //             <Box
    //                 component="div"
    //                 sx={{
    //                     display: 'inline-flex',
    //                     p: 1,
    //                     m: 5
    //                 }}>
    //                 <Button
    //                     variant="outlined" 
    //                     href="/changepassword"
    //                 >Change Password</Button>
    //             </Box>
    //             <br></br>
    //             <Box
    //                 component="div"
    //                 sx={{
    //                     display: 'inline-flex',
    //                     p: 1,
    //                     mt: 10,
    //                     mx: 5
    //                 }}>
    //                 <div style= {textAlign}>
    //                 <h1>Change Email</h1>
    //                 <p> {email} </p>
    //                 </div>
    //             </Box>
    //             <Box
    //                 component="div"
    //                 sx={{
    //                     display: 'inline-flex',
    //                     p: 1,
    //                     m: 5,
    //                 }}>
    //                 <Button
    //                     variant="outlined" 
    //                     href=""
    //                 >Change Email</Button>
    //             </Box>
    //         </div>
  
    //     </div>

    // )
}

export default SettingsPage
