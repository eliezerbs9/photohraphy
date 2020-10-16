import React, {useEffect, useContext} from 'react'
import useStorage from '../../hooks/useStorage'
import {ProfileContext} from '../Providers/ProfileContext'

const ProfilePhotoUploader = ({file}) => {
    const {url, progress} = useStorage(file)
    const {profile, setProfile} = useContext(ProfileContext)

    useEffect(() => {
        if(url){
            setProfile({
                ...profile,
                photo: url
            })
        }
    }, [url, setProfile])

    return (
        <div className="progress_bar" style={{width: progress + '%'}}></div>
    )
}

export default ProfilePhotoUploader