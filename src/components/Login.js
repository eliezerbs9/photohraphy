import React, {useState, useContext} from 'react'
import {login} from '../scripts/auth'
import {Redirect} from 'react-router-dom'
import {AuthContext} from './Providers/AuthContext'
import {Link} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {user} = useContext(AuthContext)

    return (
        user ? (
            <Redirect to="/" />
        ) : (
            <section id="login">
                <div className="login_box">
                    <label className="login_box__label" htmlFor="email">Email</label>
                    <input 
                        className="login_box__input" 
                        name="email" 
                        type="text" 
                        placeholder="example@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="login_box__msg login_box__msg--error"></p>

                    <label className="login_box__label" htmlFor="password">Password</label>
                    <input 
                        className="login_box__input" 
                        name="password" 
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <p className="login_box__msg login_box__msg--error"></p>
                    <p className="login_box__msg">Dont have an account yet ? <span><Link to='signin'>click here</Link></span></p>

                    <button className="btn btn--lg"  onClick={ () => {
                        login(email, password);
                    }}>Login</button>
                </div>
            </section>
        )
    )
}

export default Login