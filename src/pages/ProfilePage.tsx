import React, { ReactElement } from 'react'
import { TopMenu } from '../components/TopMenu'

interface Props {
    
}

export default function ProfilePage(props: Props): ReactElement {
    return (
        <div>
            <TopMenu/>
            Profile Page
        </div>
    )
}
