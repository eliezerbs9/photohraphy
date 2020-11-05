import React, {useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import {updateAlbum} from '../../scripts/firestore'


const PhotoUploader = ({file}) => {

    const {url, progress} = useStorage(file)

    useEffect(() => {
        if(url){
            
        }
    }, [url])

    return (
        <></>
    )
}

export default PhotoUploader