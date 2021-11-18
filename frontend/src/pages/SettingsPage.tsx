import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { TopMenu } from '../components/TopMenu'
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
            <div>
            <Link to = '/changepassword'>Change password</Link>

            </div>
  
        </div>

    )
}

export default SettingsPage
