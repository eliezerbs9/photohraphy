import React, {useState} from 'react'
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
            <label>Profile Photo</label>
            <label style={{margin: "10px 0px"}}>
                <input 
                    className=""
                    type="file" 
                    name="profile-photo"
                    onChange={photoHandler}
                    style={{display: "none"}}
                />
                <span className="btn btn--lg btn--success">Select File</span>
            </label>
            {imageError && <p>{imageError}</p>}
            {file && <p style={{margin: "0px"}}>{file.name}</p>}
            {file && <ProfilePhotoUploader file={file}/>}
        </>
    )
}

export default EditProfilePhoto