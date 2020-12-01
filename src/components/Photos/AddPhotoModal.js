import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import AddPhoto from './AddPhoto'

const AddPhotoModal = ({visible, setVisible, album}) => {

    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState([])

    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <div className="modal_form">
                    <AddPhoto album={album} files={files} setFiles={setFiles} errors={errors} setErrors={setErrors}/>
                    <button className="btn btn--lg btn--primary" style={{margin: '0'}} onClick={() => {setFiles([]); setVisible(false)}}>Done</button>
                </div>
            </Modal>
        </>
    )
}

export default AddPhotoModal