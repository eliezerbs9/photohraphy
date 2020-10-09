import React from 'react'
import SignUp from './SignUp'

const Login = () => {

    return (
        <section id="login">
            <div className="login_box">
                <label className="login_box__label" htmlFor="email">Email</label>
                <input className="login_box__input" name="email" type="text" placeholder="example@email.com"/>
                <p className="login_box__msg login_box__msg--error"></p>

                <label className="login_box__label" htmlFor="password">Password</label>
                <input className="login_box__input" name="password" placeholder="Password"/>
                <p className="login_box__msg login_box__msg--error"></p>

                <p className="login_box__msg">Dont have an account yet ? <span>click here</span></p>

                <button className="btn btn--lg">Login</button>
            </div>
        </section>
    )
}

export default Login