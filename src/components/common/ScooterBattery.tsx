import { Battery20, Battery30, Battery50, Battery60, Battery80, Battery90, BatteryFull } from '@material-ui/icons'
import React, { ReactElement, useEffect } from 'react'

interface Props {
    
}

function ScooterBattery(props: Props): ReactElement {
    // TODO: Get the battery % from App/Scooter State | https://youtu.be/TNhaISOUy6Q?t=231
    // Maybe use different hook? useContext?
    useEffect(() => {
        //effect
        return () => {
            //cleanup
        }
    }, [/*input*/])

    return (
        <div>
            <Battery50/>
        </div>
    )
}

export default ScooterBattery
