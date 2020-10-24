import React, {useEffect, useContext} from 'react'
import useStorage from '../../hooks/useStorage'
import {ProfileContext} from '../Providers/ProfileContext'

const ProfilePhotoUploader = ({file, profile, setProfile}) => {
    const {url, progress} = useStorage(file)

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