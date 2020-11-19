import React from 'react'

const ProfileForm = () => {
    return (
        <>
            <form className="profile__form">
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
                        updateProfile(user.uid, editProfile)
                    }}
                />
            </form>
        </>
    )
}