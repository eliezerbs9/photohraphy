import React, {useContext, useState} from 'react'
import EditProfilePhoto from './EditProfilePhoto'
import {AuthContext} from '../Providers/AuthContext'
import {updateProfile} from '../../scripts/firestore'
import Modal from '../Layout/Modal'


//RECEIVES PROPS TO SHOW OR HIDE THE MODAL
// RECEIVES THE PRE EXISTING PROFILE DATA
const EditProfileModal = ({visible, setVisible, profile}) => {

    //GET USER FROM CONTEXT
    const {user} = useContext(AuthContext)

    //STATE TO STORE THE TEMP. DATA TO UPDATE THE NEW PROFILE
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
                                className="form_input"
                                type="text" 
                                name="name"
                                defaultValue={profile.name}
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="location">Location</label>
                            <input 
                                className="form_input"
                                type="text" 
                                name="location"
                                defaultValue={profile.location}
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="about-me">About me</label>
                            <textarea
                                className="form_txt" 
                                type="text-area" 
                                name="about_me"
                                defaultValue={profile.about_me}
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="birth_date">About me</label>
                            <input 
                                className="form_input"
                                type="date" 
                                name="birth_date"
                                defaultValue={profile.birth_date}
                                onChange={onChangeHandler}
                            />

                            <input 
                                type="button" 
                                className="btn btn--lg btn--primary" 
                                value="Submit"
                                onClick={() => {
                                    //UPDATES THE PROFILE USING THE USER ID AS REFERENCE FOR THE FIRST ARGUMENT
                                    //THE SECOND ARGUMENT IS THE NEW PROFILE DATA THAT IT WILL BE UPDATED
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