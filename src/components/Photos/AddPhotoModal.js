import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import AddPhoto from './AddPhoto'

const AddPhotoModal = ({visible, setVisible, album}) => {

    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <div className="modal_form">
                    <AddPhoto album={album}/>
                    <button>Done</button>
                </div>
            </Modal>
        </>
    )
}

export default AddPhotoModal