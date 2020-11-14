import React, {useContext, useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import {addPhoto} from '../../scripts/firestore'
import {AuthContext} from '../Providers/AuthContext'


const PhotoUploader = ({file, album}) => {

    const {url, progress} = useStorage(file)
    const {user} = useContext(AuthContext)

    useEffect(() => {
        if(url){
            console.log('useEffect PhotoUploader: ', user)
            addPhoto(
                user.uid, 
                album, 
                {
                    name: file.name,
                    url: file.url,
                    createdAt: new Date().toLocaleString(),
                }
            )
        }
    }, [user ,url, addPhoto])

    return (
        <div className="progress_bar" style={{width: progress + '%'}}></div>
    )
}

export default PhotoUploader