import React from 'react'
import {logout} from '../scripts/auth'
import {Redirect} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>HOME PAGE</h1>
            <button onClick={() => {
                logout();
                return (
                    <Redirect to="/signin" />
                )
            }}>Log out</button>
        </div>
    )
}

export default Home