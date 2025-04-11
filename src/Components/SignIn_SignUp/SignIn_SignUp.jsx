import React from 'react'
import style from './SignIn_SignUp.module.css';
import { useFormik } from 'formik';
export default function SignIn_SignUp() {

    // =================== registeration form ================================
    const submitRegister = () => {
        console.log('formik submitRegister');
    }

    let formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: ''
        },
        onSubmit: submitRegister
    });
    // ================================ signIn form ==================================





    // ============================ form with style =================================
    const setActive = () => {
        document.getElementById('container').classList.add(`${style.active}`);
    }
    const removeActive = () => {
        document.getElementById('container').classList.remove(`${style.active}`);
    }
    return <>
        <section className={` ${style.signInBackGround}`}>
            <div className={`${style.container} mb-35`} id="container">
                {/* sign up div */}
                <div className={`${style.form_container} ${style.sign_up}`}>
                    <form onSubmit={formik.handleSubmit}>
                        <h1>Create Account</h1>
                        <div className={`${style.social_icons}`}>
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email for registeration</span>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.userName} name='userName' type="text" placeholder="Name" />
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' type="email" placeholder="Email" />
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' type="password" placeholder="Password" />
                        <button type='submit'>Sign Up</button>
                    </form>
                </div>

                {/* sign in div */}
                <div className={`${style.form_container} ${style.sign_in}`}>
                    <form>
                        <h1>Sign In</h1>
                        <div className={`${style.social_icons}`}>
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>

                {/* toggle div */}
                <div className={`${style.toggle_container}`}>
                    <div className={`${style.toggle}`}>
                        <div className={`${style.toggle_panel} ${style.toggle_left}`}>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button onClick={removeActive} className={`${style.hidden}`} id="login">Sign In</button>
                        </div>
                        <div className={`${style.toggle_panel} ${style.toggle_right}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button onClick={setActive} className={`${style.hidden}`} id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
