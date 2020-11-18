import React, {useContext} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import PhotoCard from './PhotoCard'

import usePhotos from '../../hooks/usePhotos'

const PhotoGrid = ({album_id}) => {

    const {user} = useContext(AuthContext)
    const {photos} = usePhotos(user.uid ,album_id)

    return (
        <>
        {photos && (
            <div className="photo_grid">
                {photos.map(photo => {
                    return (
                        <PhotoCard key={photo.id} photo={photo} />
                    )
                })}
                                
            </div>
        )}
        {!photos && (
            <div>
                <p>No photos yeat</p>
            </div>
        )}
        </>
    )

}

export default PhotoGrid