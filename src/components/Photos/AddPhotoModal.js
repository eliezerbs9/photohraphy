import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import UploadPhoto from './UploadPhoto'
import {createAlbum} from '../../scripts/firestore'

const AddPhotoModal = ({visible, setVisible}) => {

    const initialState = {
        photographerId: "",
        name: "",
        customerEmail: "",
        albumDate: "",
        createdAt: "",
        photos: []
    }


    const [newAbum, setNewAlbum] = useState(null)
    const [album, setAlbum] = useState(initialState)

    const onChangeHandler = e => {
        e.preventDefault();
        setAlbum({
            ...album,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <div className="add_photo">
                    <form className="add_photo_form">
                        <div className="add_photo_opt">
                            <span>
                                <input type="radio" id="new_album" name="photo_opt" onChange={() => setNewAlbum(true)}/>
                                <label htmlFor="new_album">New Album</label>
                            </span>

                            <span>
                                <input type="radio" id="existing_album" name="photo_opt" onChange={() => setNewAlbum(false)}/>
                                <label htmlFor="existing_album">Existing Album</label>
                            </span>
                        </div>
                        {newAbum === true && (
                            <div className="new_album">
                                <label htmlFor="album_name">Album Name</label>
                                <input
                                    name="name" 
                                    onChange={onChangeHandler}
                                    value={album.name}
                                    className="form_input" 
                                    type="text" 
                                    id="album_name"/>

                                <label htmlFor="customer_email">Customer Email</label>
                                <input 
                                    name="customerEmail"
                                    onChange={onChangeHandler}
                                    value={album.customerEmail}
                                    className="form_input" 
                                    type="email" 
                                    id="customer_name"/>

                                <label htmlFor="album_date">Album Date</label>
                                <input 
                                    name="albumDate"
                                    onChange={onChangeHandler}
                                    value={album.albumDate}
                                    className="form_input" 
                                    type="date" 
                                    id="album_date"/>


                                <input 
                                    className="btn btn--lg btn--primary" 
                                    type="button" 
                                    value="Create New Album"
                                    onClick={() => {
                                         createAlbum('UiLt3FYVBLT48HDHEGX7XIlQsi82', album).then(() => {
                                             alert("Album Successfuly created")
                                             setAlbum(initialState)
                                         }).catch(error => {
                                             alert('There was an error')
                                         })
                                        
                                   }}
                                />
                            </div>
                        )}
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default AddPhotoModal