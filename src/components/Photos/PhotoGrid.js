import React, {useState,useContext, useEffect} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'
import {deletePhoto} from '../../scripts/firestore'


import usePhotos from '../../hooks/usePhotos'

const PhotoGrid = ({album_id}) => {

    const {user} = useContext(AuthContext)
    const {photos} = usePhotos(user.uid ,album_id)
    const [showPhotoModal, setShowPhotoModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [selectedPhotos, setSelectedPhotos] = useState([])

    const openPhotoModal = (e, photo) => {
        //OPEN MODAL ONLYF IF THE USER CLICK ON THE PHOTO_CARD
        //FIXED PROBLEM WITH CHECKING CARD CHECKBOX WITHOU OPENNING MODAL
        let pattern = /^photo_card_.*/.test(e.target.classList)
        console.log(pattern)
        if(pattern){
            setPhoto(photo)
            setShowPhotoModal(true)
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

    const deleteSelectedPhotos = () => {
        //Loope thru the selected photos and delete all of them
        for(let i=0; i<selectedPhotos.length; i++){
            let photo = photos[i]
            console.log('photo being deleted now: ',photo)
            deletePhoto(user.uid, album_id, photo)
        }

    }


    useEffect(() => {
        console.log('useEffect PhotoGrid selected photos: ', selectedPhotos)
    }, [selectedPhotos, setSelectedPhotos])

    return (
        <>
            {photos && (
                <>
                    <PhotoModal visible={showPhotoModal} setVisible={setShowPhotoModal} photo={photo} album_id={album_id}/>
                    <div className="photo_grid">
                        <a className="btn btn--danger" style={{marginRight: 'auto'}} onClick={deleteSelectedPhotos}>
                            Delete Photos
                        </a>
                        {photos.map(photo => {
                            return (
                                <a key={photo.id} onClick={(e) => openPhotoModal(e, photo)}>
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