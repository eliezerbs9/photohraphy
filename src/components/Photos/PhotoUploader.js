import React, {useContext, useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import {updateAlbum} from '../../scripts/firestore'
import AuthProvider from '../Providers/AuthContext'


const PhotoUploader = ({file, album}) => {

    const {url, progress} = useStorage(file)
    const {user} = useContext(AuthProvider)

    useEffect(() => {
        if(url){
            updateAlbum(
                user.uid, 
                album.id, 
                {
                    ...album,
                    [album.photos]: {
                        url: url,
                        createdAt: "today"
                    }
                })
        }
    }, [url, setProfile])

    return (
        <div className="progress_bar" style={{width: progress + '%'}}></div>
    )
}

export default PhotoUploader