import React from 'react'
import Album from './Album'
import useAlbums from '../../hooks/useAlbums'


const AlbumsGrid = ({user}) => {

    const {albums} = useAlbums(user.uid)


    return(
        <>
            {albums && (
                <div className="albums_grid">
                    {albums.map(album => {
                        return (
                            <Album album={album} />
                        )
                    })}
                </div>
            )}               
        </>   
    )
   
}

export default AlbumsGrid