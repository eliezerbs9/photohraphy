import React from 'react'
import AlbumCard from './AlbumCard'
import useAlbums from '../../hooks/useAlbums'


const AlbumsGrid = ({user}) => {

    const {albums} = useAlbums(user.uid)


    return(
        <>
            {albums && (
                <div className="albums_grid">
                    {albums.map(album => {
                        return (
                            <AlbumCard key={album.id} album={album} />
                        )
                    })}
                </div>
            )}               
        </>   
    )
   
}

export default AlbumsGrid