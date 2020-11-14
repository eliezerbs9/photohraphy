import React, {useState} from 'react'

const AddPhoto = ({album, setFileRef, setErrorRef}) => {
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState()
    const [errorCounter, setErrorCounter] = useState(0)


    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    const photoHandler = (e) => {
        let selected = e.target.files
        let valid = []
        let notValid = []
        if(selected.length > 0){
            console.log('More than one')
            for(var i=0; i < selected.length; i++){
                if(fileTypes.includes(selected[i].type)){
                    console.log(selected[i])
                    valid.push(selected)
                }
                else{
                    console.log('error')
                    notValid.push({
                        file: file,
                        error: "Please selected an image file (png or jpeg)"
                    })
                }
            }
            setErrors(notValid)
            setFile(valid)
        }else{
            if(selected && fileTypes.includes(selected.type)){
                console.log(selected)
                setFile(selected);
            }else{
                setFile(null);
                setErrors('Please selected an image file (png or jpeg)')
            }
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
        {/* {errors && <p>{imageError}</p>} */}
        {file && <p style={{margin: "0px"}}>{file.name}</p>}
        {/* {file && <ProfilePhotoUploader file={file} profile={profile} setProfile={setProfile}/>} */}

        </>
    )
}

export default AddPhoto