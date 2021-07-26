import React, { ReactElement, useContext, useState } from 'react'
import {createScooter} from '../api/Scooter'
import { TopMenu } from '../components/TopMenu'
import { AppContext } from '../state/context';

interface Props {
    
}

function AdminPage(_props: Props): ReactElement {
    const [scoot, setscoot] = useState("scooter_00")
    const { state, dispatch } = useContext(AppContext);


    function handleSubmit(e:any) {
        e.preventDefault()
        const scooter = createScooter(scoot);
        console.log(scooter)
    }

    return (
        <div>
            <TopMenu/>
            Admin Page
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Scooter ID:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AdminPage
