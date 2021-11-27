import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { TopMenu } from '../components/TopMenu'
import Button from '@mui/material/Button';


interface Props {
    
}

function SettingsPage(props: Props): ReactElement {

    function Clicked(e:any) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <TopMenu/>
            Settings Page
            <div className = "settingsPage-div">
                <Button
                variant="outlined" 
                href="/changepassword"
                >Change Password</Button>

            </div>
  
        </div>

    )
}

export default SettingsPage
