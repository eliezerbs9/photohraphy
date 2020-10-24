import React, {useContext} from 'react'
import EditProfilePhoto from './EditProfilePhoto'
import {ProfileContext} from '../Providers/ProfileContext'
import {AuthContext} from '../Providers/AuthContext'
import {updateProfile} from '../../scripts/firestore'
import Modal from '../Layout/Modal'
import { useState } from 'react'


const EditProfileModal = ({visible, setVisible, profile}) => {

    const {user} = useContext(AuthContext)
    const [editProfile, setEditProfile] = useState({...profile}) 
        
    const onChangeHandler = (e) => {
        e.preventDefault();
        setEditProfile({
            ...profile, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {profile && (
                <Modal visible={visible} setVisible={setVisible}>
                    <div className="edit_profile">
                        <form className="edit_profile__form">
                            <EditProfilePhoto profile={editProfile} setProfile={setEditProfile}/>
                            <label htmlFor="name">Name</label>
                            <input 
                                className="edit_profile__form__input"
                                type="text" 
                                name="name"
                                defaultValue={profile.name}
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="location">Location</label>
                            <input 
                                className="edit_profile__form__input"
                                type="text" 
                                name="location"
                                defaultValue={profile.location}
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="about-me">About me</label>
                            <textarea
                                className="edit_profile__form__txt" 
                                type="text-area" 
                                name="about_me"
                                defaultValue={profile.about_me}
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="birth_date">About me</label>
                            <input 
                                className="edit_profile__form__input"
                                type="date" 
                                name="birth_date"
                                defaultValue={profile.birth_date}
                                onChange={onChangeHandler}
                            />

                            <input 
                                type="button" 
                                className="btn btn--primary" 
                                value="Submit"
                                onClick={() => {
                                    updateProfile(user.uid, editProfile)
                                }}
                            />
                        </form>
                    </div>
                </Modal>
            )}       
        </>

            
    )
}

export default EditProfileModal