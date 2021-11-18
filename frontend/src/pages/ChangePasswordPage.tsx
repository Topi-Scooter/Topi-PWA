import React, { ReactElement,useState} from 'react'
import { Link } from 'react-router-dom'
import { TopMenu } from '../components/TopMenu'
import { Auth } from 'aws-amplify';
import { AppContext } from '../state/context';
interface Props {
    
}

function ChangePasswordPage(props: Props): ReactElement {

    const [password,setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function handleSubmit(e:any){
        e.preventDefault()
        console.log("submitted")

    }

    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
    //onChange = {(event) => setPassword(event.target.value)}
    //onChange = {(event) => setNewPassword(event.target.value)}

    return (
        <div>
            <TopMenu/>
            <form onSubmit = {handleSubmit}>
                <label> Current Password: </label>
                    <input 
                        value = {password} 
                        onChange = {(event) => setPassword(event.target.value)}
                />

                <label> New Password: </label>
                    <input 
                        value = {newPassword} 
                        onChange = {(event) => setNewPassword(event.target.value)}
                />
            <button type ="submit" >Submit</button>
            </form>
  
        </div>

    )
}

export default ChangePasswordPage
