import React, {useState,useContext, useEffect} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'

import usePhotos from '../../hooks/usePhotos'

const PhotoGrid = ({album_id}) => {

    const {user} = useContext(AuthContext)
    const {photos} = usePhotos(user.uid ,album_id)
    const [showModal, setShowModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [selectedPhotos, setSelectedPhotos] = useState([])

    const openModal = (e, photo) => {
        //OPEN MODAL ONLYF IF THE USER CLICK ON THE PHOTO_CARD
        //FIXED PROBLEM WITH CHECKING CARD CHECKBOX WITHOU OPENNING MODAL
        let pattern = /^photo_card_.*/.test(e.target.classList)
        console.log(pattern)
        if(pattern){
            setPhoto(photo)
            setShowModal(true)
        }
    }

    const selectPhoto = (photo) => {
        //ADD PHOTO TO ARRAY
        setSelectedPhotos([
            ...selectedPhotos,
            photo
        ])
    }

    const removePhoto = (photo) => {
        //CREATES A NEW ARRAY WITH THE PHOTOS THAT DO NOT MATCH WITH THE EXPRESSION BELOW (ID)
        let photos = selectedPhotos.filter((delete_photo) => delete_photo.id !== photo.id);
        setSelectedPhotos(photos)
    }

    const deletePhoto = photo => {

    }


    useEffect(() => {
        console.log('useEffect PhotoGrid selected photos: ', selectedPhotos)
    }, [selectedPhotos, setSelectedPhotos])

    return (
        <>
        {photos && (
            <>
                <PhotoModal visible={showModal} setVisible={setShowModal} photo={photo} album_id={album_id}/>
                <div className="photo_grid">
                    {photos.map(photo => {
                        return (
                            <a 
                                key={photo.id}
                                onClick={(e) => openModal(e, photo)}
                            >
                                    <PhotoCard  photo={photo} selectPhoto={selectPhoto} removePhoto={removePhoto}/>  
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