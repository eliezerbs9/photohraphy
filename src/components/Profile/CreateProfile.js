import React, {useState, useContext} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import CreateProfileModal from './CreateProfileModal'

const CreateProfile = () => {

    const {user} = useContext(AuthContext)

    const profile = {
        name: user.displayName,
        about_me: "",
        birth_date: "",
        location: "",
        photo: ""
    }

    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <CreateProfileModal visible={showModal} setVisible={setShowModal} />
            <header className="profile profile_create">
                <p>Please set up your profile</p>
                <a 
                    className="btn btn--lg btn--primary"
                    onClick={() => {
                        console.log('creating new profile: ', profile)
                        setShowModal(true)
                    }}
                >Create Profile</a>
            </header>
        </>
    )
}

export default CreateProfile