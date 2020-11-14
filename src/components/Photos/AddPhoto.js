import React, {useState} from 'react'
import PhotoUploader from './PhotoUploader'

const AddPhoto = ({album}) => {
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState([])


    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    const photoHandler = (e) => {
        let selected = e.target.files
        let valid = []
        let notValid = []
        if(selected.length >= 0){
            for(var i=0; i < selected.length; i++){
                if(fileTypes.includes(selected[i].type)){
                    valid.push(selected[i])
                }
                else{
                    notValid.push({
                        file: selected[i],
                        error: "Please selected an image file (png or jpeg)"
                    })
                }
            }
            setErrors(notValid)
            setFiles(valid)
        }else{
            errors.push({
                file: "No file",
                error: "This file cannot be uploaded"
            })
        }
    }

    return (
        <>
        <label>Add Photo</label>
        <label style={{margin: "10px 0px"}}>
            <input 
                className=""
                type="file" 
                name="profile-photo"
                onChange={photoHandler}
                style={{display: "none"}}
                multiple
            />
            <span className="btn btn--lg btn--success">Select Files</span>
        </label>
        {files.length > 0 && (
            <>
                {files.map((file) => {
                    return(
                        <p  style={{margin: '0'}}>{file.name}</p>

                    )
                })}
            </>
        )}
        {errors && (
            <>
                {errors.map(error =>{
                    console.log('Error: ', error)
                })}
            </>
        )}

        </>
    )
}

export default AddPhoto