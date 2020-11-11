import React, {useContext ,useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthContext} from '../Providers/AuthContext'
import AddPhotoModal from '../Photos/AddPhotoModal'
import AlbumsGrid from './AlbumsGrid'
import Album from './Album'


const Albums = () => {

    const [showModal, setShowModal] = useState(false)
    const {user} = useContext(AuthContext)

    return (
        <>
            <AddPhotoModal visible={showModal} setVisible={setShowModal} user={user}/>
            <div className="albums">
                <a 
                    className="btn btn--primary"
                    onClick={() => {
                        console.log('add photo modal')
                        setShowModal(true)
                    }}
                    >Add Album</a>
                    <Router>
                        <Switch>
                            <Route exact path="/" render={() => <AlbumsGrid user={user}/>} />
                            <Route path="/album/:id" render={({match}) => <Album user={user} album_id={match.params.id}/>} />
                        </Switch>
                    </Router>
                    
            </div>
        </>
    )
}

export default Albums