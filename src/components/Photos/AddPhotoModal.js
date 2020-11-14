import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import UploadPhoto from './UploadPhoto'
import {createAlbum} from '../../scripts/firestore'
import AddPhoto from './AddPhoto'

const AddPhotoModal = ({user, visible, setVisible, album}) => {

    

    // const onChangeHandler = e => {
    //     e.preventDefault();
    //     setAlbum({
    //         ...album,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    //CHANGE IT TO SAVE PHOTO
    // const saveAlbum = () => {
    //     createAlbum(user.uid, album).then(() => {
    //         alert("Album Successfuly created")
    //         setAlbum(initialState)
    //     }).catch(error => {
    //         alert('There was an error')
    //     })
    // }

    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <div className="modal_form">
                    <AddPhoto album={album}/>
                </div>
            </Modal>
        </>
    )
}

export default AddPhotoModal