import React, {useContext} from 'react'
import EditProfilePhoto from './EditProfilePhoto'
import {ProfileContext} from '../Providers/ProfileContext'
import {AuthContext} from '../Providers/AuthContext'
import {updateProfile} from '../../scripts/firestore'

const EditProfile = () => {

    const closeModal = (e) => {
        let modal = document.getElementById('backdrop');
        if(e.target.classList.contains('backdrop')){
            modal.style.display = "none"
        }
    }


    const {profile, setProfile} = useContext(ProfileContext)
    const {user} = useContext(AuthContext) 

    console.log(`user edit profile `)
    
    const onChangeHandler = (e) => {
        setProfile({
            ...profile, 
            [e.target.name]: e.target.value
        })
    }

    return (
            <div 
                className="backdrop" 
                id="backdrop"
                onClick={closeModal}>
                <div className="edit_profile">
                    <form className="edit_profile__form">
                        <EditProfilePhoto/>
                        <label htmlFor="name">Name</label>
                        <input 
                            className="edit_profile__form__input"
                            type="text" 
                            name="name"
                            onChange={onChangeHandler}
                        />

                        <label htmlFor="location">Location</label>
                        <input 
                            className="edit_profile__form__input"
                            type="text" 
                            name="location"
                            onChange={onChangeHandler}
                        />

                        <label htmlFor="about-me">About me</label>
                        <textarea
                            className="edit_profile__form__txt" 
                            type="text-area" 
                            name="about_me"
                            onChange={onChangeHandler}
                        />

                        <label htmlFor="birth_date">About me</label>
                        <input 
                            className="edit_profile__form__input"
                            type="date" 
                            name="birth_date"
                            onChange={onChangeHandler}
                        />

                        <input 
                            type="button" 
                            className="btn btn--primary" 
                            value="Submit"
                            onClick={() => {
                                updateProfile(user.uid, profile)
                            }}
                        />
                    </form>
                </div>
            </div>
    )
}

export default EditProfile