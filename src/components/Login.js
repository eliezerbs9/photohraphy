import React, {useState} from 'react'
import SignUp from './SignUp'
import {login} from '../scripts/auth'

const Login = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
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
                <p className="login_box__msg">Dont have an account yet ? <span>click here</span></p>

                <button className="btn btn--lg"  onClick={ () => {
                    login(email, password);
                }}>Login</button>
            </div>
        </section>
    )
}

export default Login