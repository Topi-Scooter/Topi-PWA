import React, { ReactElement } from 'react'
import { TopMenu } from '../components/TopMenu'

interface Props {
    
}

function SettingsPage(props: Props): ReactElement {
    return (
        <div>
            <TopMenu/>
            Settings Page
        </div>
    )
}

export default SettingsPage
