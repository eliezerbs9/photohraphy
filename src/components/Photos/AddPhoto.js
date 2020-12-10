import React, {useState} from 'react'
import PhotoUploader from './PhotoUploader'

const AddPhoto = ({album, files, setFiles, errors, setErrors}) => {


    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    const photoHandler = (e) => {
        let selected = e.target.files
        let valid = []
        let notValid = []
        console.log('Selected Files: ', selected)
        if(selected.length >= 0){
            for(var i=0; i < selected.length; i++){
                let file = selected[i]
                if(fileTypes.includes(file.type)){
                    valid.push(file)
                }
                else{
                    notValid.push({
                        file: file,
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
                <span style={{margin: '0', marginRight: 'auto', float: 'left'}} className="btn btn--lg btn--success">Select Files</span>
            </label>
            {files.length > 0 && (
                <>
                    {
                        files.map((file) => {
                            return(
                                <>
                                    <p style={{margin: '0'}}>{file.name}</p>
                                    <PhotoUploader album={album} file={file}/>
                                </>
                            )
                        })
                    }
                </>
            )}
            {errors && (
                <>
                    {errors.map(error =>(
                        <p style={{color: 'red', margin: '2px 0', fontSize: 'small'}}>X - {error.file.name} cannot be uploaded. {error.error}</p>
                    ))}
                </>
            )}
        </>
    )
}

export default AddPhoto