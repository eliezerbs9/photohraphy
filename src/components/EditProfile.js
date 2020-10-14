import React, {useState} from 'react'
import EditProfilePhoto from './EditProfilePhoto'

const EditProfile = () => {

    const closeModal = (e) => {
        let modal = document.getElementById('backdrop');
        if(e.target.classList.contains('backdrop')){
            modal.style.display = "none"
        }
    }

    return (
        <div 
            className="backdrop" 
            id="backdrop"
            onClick={closeModal}>
            <div className="edit_profile">
                <form className="edit_profile__form">

                    <EditProfilePhoto />

                    <label htmlFor="name">Name</label>
                    <input 
                        className="edit_profile__form__input"
                        type="text" 
                        name="name"
                    />

                    <label htmlFor="location">Location</label>
                    <input 
                        className="edit_profile__form__input"
                        type="text" 
                        name="location"
                    />

                    <label htmlFor="about-me">About me</label>
                    <textarea
                        className="edit_profile__form__txt" 
                        type="text-area" 
                        name="about-me"
                    />

                    <input 
                        type="submit" 
                        className="btn btn--primary" 
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    )
}

export default EditProfile