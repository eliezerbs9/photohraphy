import React, {useState} from 'react'
import EditProfilePhoto from './EditProfilePhoto'

const EditProfile = () => {

    const closeModal = (e) => {
        let modal = document.getElementById('backdrop');
        if(e.target.classList.contains('backdrop')){
            modal.style.display = "none"
        }
    }

    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [aboutMe, setAboutMe] = useState("")

    return (
        <div 
            className="backdrop" 
            id="backdrop"
            onClick={closeModal}>
            <div className="edit_profile">
                <form className="edit_profile__form">
                    <EditProfilePhoto setPhoto={setPhoto}/>
                    <label htmlFor="name">Name</label>
                    <input 
                        className="edit_profile__form__input"
                        type="text" 
                        name="name"
                        onChange={(e) => {setName(e.target.value)}}
                    />

                    <label htmlFor="location">Location</label>
                    <input 
                        className="edit_profile__form__input"
                        type="text" 
                        name="location"
                        onChange={(e) => {setLocation(e.target.value)}}
                    />

                    <label htmlFor="about-me">About me</label>
                    <textarea
                        className="edit_profile__form__txt" 
                        type="text-area" 
                        name="about-me"
                        onChange={(e) => {setAboutMe(e.target.value)}}
                    />

                    <input 
                        type="button" 
                        className="btn btn--primary" 
                        value="Submit"
                        onClick={() => {
                            let user = {
                                photo: photo,
                                name: name,
                                location: location,
                                about_me: aboutMe
                            }
                            console.log(user)
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default EditProfile