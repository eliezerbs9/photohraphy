import React, {useState, useE} from 'react'
import ProfilePhotoUploader from './ProfilePhotoUploader'

const EditProfilePhoto = () => {

    const [file, setFile] = useState(null);
    const [imageError, setImageError] = useState(null)
    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    const photoHandler = (e) => {
        let selected = e.target.files[0]
        if(selected && fileTypes.includes(selected.type)){
            console.log(selected)
            setFile(selected);
        }else{
            setFile(null);
            setImageError('Please selected an image file (png or jpeg)')
        }
    }


    return (
        <>
            <label htmlFor="profile-photo">Profile photo</label>
            <input 
                className=""
                type="file" 
                name="profile-photo"
                onChange={photoHandler}
            />
            {imageError && <p>{imageError}</p>}
            {file && <p>{file.name}</p>}
            {file && <ProfilePhotoUploader file={file} setFile={setFile} />}
        </>
    )
}

export default EditProfilePhoto