import React, {useEffect} from 'react'
import useStorage from '../../hooks/useStorage'

const ProfilePhotoUploader = ({file, setPhoto}) => {
    const {url, progress} = useStorage(file)

    useEffect(() => {
        if(url){
            setPhoto(url)
        }
    }, [url, setPhoto])

    return (
        <div className="progress_bar" style={{width: progress + '%'}}></div>
    )
}

export default ProfilePhotoUploader