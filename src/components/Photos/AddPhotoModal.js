import React, {useState} from 'react'
import Modal from '../Layout/Modal'
import AddPhoto from './AddPhoto'

const AddPhotoModal = ({visible, setVisible, album}) => {

    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState([])

    const resetState = () => {
        setFiles([])
        setErrors([])
    }

    return (
        <>
            <Modal visible={visible} setVisible={setVisible} closeCallback={resetState}>
                <div className="modal_form">
                    <AddPhoto album={album} files={files} setFiles={setFiles} errors={errors} setErrors={setErrors}/>
                </div>
            </Modal>
        </>
    )
}

export default AddPhotoModal