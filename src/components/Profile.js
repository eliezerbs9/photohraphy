import React, {useContext} from 'react'
import {AuthContext} from './AuthContext'
import {logout} from '../scripts/auth'


const Profile = () => {

    const {user} = useContext(AuthContext)

    return (
        <header className="profile">
            <div className="profile_photo">
                <img 
                    src="https://lh3.googleusercontent.com/proxy/dC17l5AYifWAmjF8lR71txBEqG5ujNeEEvJS52Sbjl6eVR9LXCOBGNhqOOpU1Geuz91BCY8yN9GsoAxZHWi9chN_YiZ3JYFEnVDZQOf52iesnrzjWYfvwiaw6qCpNCKBHG7PhrCdfjnzMe9g2wOyz2Q-" 
                    alt="profile photo" 
                    className="profile_photo__img"
                />
            </div>
            <section className="profile_info">
                <div className="profile_user">
                    <p className="profile_user__name">@eliezerbs9</p>
                    <a className="btn btn--primary"href="#">Edit Profile</a>
                    <a className="btn btn--danger" onClick={logout}>Log out</a>
                </div>
                <ul className="profile_user_info">
                    <li>San Rafael</li>
                    <li>28 years old</li>
                </ul>
                <div className="profile__about">
                    <p className="profile__info__name">{user.displayName}</p>
                    <p className="profile_about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum, quam ducimus provident iste doloremque.</p>
                </div>
            </section>
        </header>
)
    
}

export default Profile