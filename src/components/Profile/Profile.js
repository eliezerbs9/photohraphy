import React, {useContext, useState} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import useProfile from '../../hooks/useProfile'
import EditProfileModal from './EditProfileModal'
import CreateProfile from './CreateProfile'

const Profile = () => {

    const {user} = useContext(AuthContext)
    const {profile} = useProfile(user)
    const [showModal, setShowModal] = useState(false)
    console.log('user: ', user)

    return (
        <>  
            {(user && profile) &&
            <>
                <EditProfileModal profile={profile} visible={showModal} setVisible={setShowModal} />
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
                                    console.log('setting edit profile')
                                    setShowModal(true)
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
            </>  
            }
            {(user && !profile) && (
                <>
                    <CreateProfile />
                </>
            )}
        </> 
)
    
}

export default Profile