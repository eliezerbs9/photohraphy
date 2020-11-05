import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import UploadPhoto from './UploadPhoto'
import {createAlbum} from '../../scripts/firestore'

const AddPhotoModal = ({visible, setVisible}) => {

    const [newAbum, setNewAlbum] = useState(null)

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
                                <input className="form_input" type="text" id="album_name"/>

                                <label htmlFor="customer_email">Customer Email</label>
                                <input className="form_input" type="text" id="customer_name"/>

                                <label htmlFor="album_date">Album Date</label>
                                <input className="form_input" type="date" id="album_date"/>


                                <input 
                                    className="btn btn--lg btn--primary" 
                                    type="button" 
                                    value="Create New Album"
                                    onClick={() => {
                                        let album = {
                                            name: "teste",
                                            customerEmail: "eliezerbs99@gmail.com",
                                            albumDate: "11/5/2020"
                                        }
                                        createAlbum('UiLt3FYVBLT48HDHEGX7XIlQsi82', album)
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