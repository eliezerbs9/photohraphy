import React from 'react'

const SignUp = () => {
    return (
        <section id="register">
            <div className="register_box">
                <h1>Register</h1>
                <label className="register_box__label" htmlFor="email">Email</label>
                <input className="register_box__input" name="email" type="text" placeholder="example@email.com"/>
                <p className="register_box__msg register_box__msg--error"></p>

                <label className="register_box__label" htmlFor="password">Password</label>
                <input className="register_box__input" name="password" placeholder="Password"/>
                <p className="register_box__msg register_box__msg--error"></p>

                <p className="register_box__msg">Already have an account yet ? <span>click here</span></p>

                <button className="btn btn--lg">Register</button>
            </div>
        </section>
    )
}

export default SignUp