import React, { ReactElement } from 'react'
import { TopMenu } from '../components/TopMenu'
// import the stripe API

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
