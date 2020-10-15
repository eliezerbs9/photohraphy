import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../AuthContext'
import useProfile from '../../hooks/useProfile'




const Profile = () => {

    const {user} = useContext(AuthContext)
    const {profile} = useProfile(user.uid)

    console.log(profile)

    return (
        <>
            {(user && profile) &&
                <header className="profile">
                    <div className="profile_photo">
                        <img 
                            src={profile.photo}
                            alt="profile photo" 
                            className="profile_photo__img"
                        />
                    </div>
                    <section className="profile_info">
                        <div className="profile_user">
                            <p className="profile_user__name">@eliezerbs9</p>
                            <a 
                                className="btn btn--primary"
                                onClick={() => {
                                    let modal = document.getElementById('backdrop');
                                    modal.style.display = "block"
                                }}
                                >Edit Profile</a>
                            {/* <Link to={`/edit-profile/${user.uid}`} className="btn btn--primary">Edit Profile</Link> */}
                        </div>
                        <ul className="profile_user_info">
                            <li>{profile.location}</li>
                            <li>{(profile.birth_date).toString()}</li>
                        </ul>
                        <div className="profile__about">
                            <p className="profile__info__name">{profile.name}</p>
                            <p className="profile_about__text">{profile.about_me}</p>
                        </div>
                    </section>
                </header>
            }
        </> 
)
    
}

export default Profile