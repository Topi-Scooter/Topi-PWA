import React, { ReactElement } from 'react'
import { TopMenu } from '../components/TopMenu'

interface Props {
    
}

export default function PaymentPage(props: Props): ReactElement {
    return (
        <div>
            <TopMenu/>
            Payment Page
        </div>
    )
}
