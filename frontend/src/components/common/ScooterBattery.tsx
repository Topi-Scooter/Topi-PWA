import { Battery20, Battery30, Battery50, Battery60, Battery80, Battery90, BatteryFull } from '@material-ui/icons'
import React, { ReactElement, useContext, useEffect } from 'react'
import { AppContext } from '../../state/context';
import { BatteryPercentages } from '../../state/state';

const BatteryPercentagesIcons = {
    Battery20: <Battery20/>,
    Battery30: <Battery30/>,
    Battery50: <Battery50/>,
    Battery60: <Battery60/>,
    Battery80: <Battery80/>,
    Battery90: <Battery90/>,
    BatteryFull: <BatteryFull/>
}

interface Props {
    
}

function ScooterBattery(props: Props): ReactElement {
    const { state } = useContext(AppContext);
    const batteryIcon = BatteryPercentagesIcons[state.scooter.batteryLevel];

    return (
        <div>
            { batteryIcon }
        </div>
    )
}

export default ScooterBattery
