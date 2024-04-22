import { Component } from 'react'
import { CiCirclePlus } from "react-icons/ci";

import './index.css'

class Profile extends Component{
    render(){
        return(
            <div className='Profile-Container'>
                <div className='Person-details-container'>
                    <div className='profile-picture'>
                        <p>RR</p>
                    </div>
                    <div className='profile-name-container'>
                        <p className='name'>Rolande Raimondi</p>
                        <p className='profession'>Research Nurse</p>
                    </div>
                </div>
                <div className='chat-profile-container'>
                    <p className='conversation-heading'>Conversations</p>
                    <button type="button" className='add-button'>
                        <CiCirclePlus className='add-icon'/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Profile