import { IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import {createScooter, getAllScooter} from '../api/Scooter'
import { TopMenu } from '../components/TopMenu'
import { AppContext } from '../state/context';

interface Props {
    
}

function AdminPage(_props: Props): ReactElement {
    const [scoot, setscoot] = useState("scooter_00")
    const [scooters, setScooters] = useState<any>()
    const { state, dispatch } = useContext(AppContext);


    function handleChange(e:any) {
        console.log(e.target.value)
        setscoot(e.target.value);
      }

    function handleSubmit(e:any) {
        e.preventDefault()
        console.log(e)
        createScooter(scoot).then((res) => {
            console.log(res)
            getScoots()
        });
    }

    function getScoots() {
        getAllScooter()
            .then((scoots:any)=>{
                setScooters(scoots.data.listScooters.items);
                console.log(scoots.data.listScooters.items)
            })
    }

    useEffect(() => {
        getScoots();
    }, [])
    

    return (
        <div>
            Admin Page
            <TopMenu/>
            <div>
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
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div>
                <List>
                    {scooters?.map((data:any) => (
                        <ListItemText primary={`Line item ${data.id}`} />
                    ))}
                </List>
            </div>
        </div>
    )
}

export default AdminPage
