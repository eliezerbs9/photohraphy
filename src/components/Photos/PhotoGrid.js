import React, {useState,useContext} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'

import usePhotos from '../../hooks/usePhotos'

const PhotoGrid = ({album_id}) => {

    const {user} = useContext(AuthContext)
    const {photos} = usePhotos(user.uid ,album_id)
    const [showModal, setShowModal] = useState(false)
    const [photo, setPhoto] = useState(null)

    const openModal = (e, photo) => {
        let pattern = /^photo_card_.*/.test(e.target.classList)
        console.log(pattern)
        if(pattern){
            setPhoto(photo)
            setShowModal(true)
        }
    }

    return (
        <>
        {photos && (
            <>
                <PhotoModal visible={showModal} setVisible={setShowModal} photo={photo}/>
                <div className="photo_grid">
                    {photos.map(photo => {
                        return (
                            <a 
                                onClick={(e) => openModal(e, photo)}
                            >
                                    <PhotoCard key={photo.id} photo={photo}/>  
                            </a>

                        )
                    })}              
                </div>
            </>
     
        )}
        {!photos && (
            <div>
                <p>No photos yeat</p>
            </div>
        )}
        </>
    )

}

export default PhotoGrid