import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../scripts/auth'


const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="content">
                <ul className="navbar_links">
                    <li className="navbar_logo">
                        <Link to="/">PhograpY</Link>
                    </li>
                    <li className="navbar_link" style={{marginLeft: "auto"}}>
                        <a className="btn btn--danger" onClick={logout}>Log out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar