import React from 'react'
import {logout} from '../scripts/auth'
import {Redirect} from 'react-router-dom'
import Profile from './Profile'

const Home = () => {
    return (
        <main id="home">
            <div className="content">
                <Profile />
            </div>
        </main>
    )
}

export default Home