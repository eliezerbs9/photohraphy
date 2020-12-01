import React, {useContext, useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import {addPhoto} from '../../scripts/firestore'
import {AuthContext} from '../Providers/AuthContext'


const PhotoUploader = ({file, album}) => {

    const {url, progress} = useStorage(file)
    const {user} = useContext(AuthContext)

    useEffect(() => {
        if(url){
            let data = {
                name: file.name,
                url: url,
                createdAt: new Date().toLocaleString(),
            }
            console.log('useEffect PhotoUploader: ', data)
            addPhoto(user.uid, album, data)
        }
    }, [file ,url, addPhoto])

    return (
        <div className="progress_bar" style={{width: progress + '%', marginBottom: '5px'}}></div>
    )
}

export default PhotoUploader