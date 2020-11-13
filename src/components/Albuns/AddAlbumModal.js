import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import {createAlbum} from '../../scripts/firestore'

const AddPhotoModal = ({user, visible, setVisible}) => {

    const initialState = {
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

    const saveAlbum = () => {
        createAlbum(user.uid, album).then(() => {
            alert("Album Successfuly created")
            setAlbum(initialState)
        }).catch(error => {
            alert('There was an error')
        })
    }

    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <form className="modal_form">
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
                        onClick={saveAlbum}
                    />
                </form>
            </Modal>
        </>
    )
}

export default AddPhotoModal