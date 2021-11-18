import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { TopMenu } from '../components/TopMenu'
interface Props {
    
}

function ChangePasswordPage(props: Props): ReactElement {


    return (
        <div>
            <TopMenu/>
            This is where you will change the password
  
        </div>

    )
}

export default ChangePasswordPage
