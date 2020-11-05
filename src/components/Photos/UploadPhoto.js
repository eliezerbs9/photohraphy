import React, {useState} from 'react'

const UploadPhoto = () => {

    const [files, setFiles] = useState([])
    const [imageError, setImageError] = useState(null)

    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg']

    const photoHandler = (e) => {
        let selected = e.target.files
        let photos = []
        if(selected){
            for(var i=0; i<selected.length; i++){
                if(fileTypes.includes(selected[i].type)){
                    console.log(selected[i])
                    photos.push(selected[i])
                }
                else{
                    setImageError('Please selected an image file (png or jpeg)')
                }
            }
            setFiles(photos)
            console.log(photos)
        }else{
            console.log('ERRORRR')
            setFiles(null)
            setImageError('Please select an image')
        }
    }


    return (
        <>
            <label>
                <input 
                    type="file"
                    style={{display: "none"}}
                    onChange={photoHandler}
                    multiple
                />
                <span className="btn btn--success">Upload Pootos</span>
            </label>
            <div className="photo_uploader_output">
                {imageError && <p>{imageError}</p>}
                {files && files.map(file => <p style={{margin: "0"}}>{file.name}</p>)}
            </div>
        </>
    )
}

export default UploadPhoto