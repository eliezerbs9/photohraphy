import React, {useState} from 'react'

const PhotoCard = ({photo, selectPhoto, removePhoto}) => {

    //STATE IF THE PHOTO IS SELECTED OR NOT
    const [isChecked, setIsChecked] = useState(false)

    const onChangeHandler = () => {
        //IF PHOTO IS NOT SELECTED ADD IT TO THE ARRAY
        if(!isChecked){
            selectPhoto(photo)
        }else{
        //IF IT IS SELECTED, REMOVE IT FROM THE ARRAY
            removePhoto(photo)
        }
        //CHANGE THE STATE
        setIsChecked(!isChecked) 
    }

    return (
        <>
        <div className="photo_card">
            <input type="checkbox" 
                onClick={onChangeHandler}
            /> 
            <img className="photo_card_img" src={photo.url} alt={photo.name}/>
            <p className="photo_card_name">{photo.name}</p>
        </div>
        
        </>
    )
}

export default PhotoCard