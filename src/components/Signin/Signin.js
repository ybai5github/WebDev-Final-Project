import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = ({ onRouteChange, loadUser }) => {

    const navigate = useNavigate();

    const home = () => {
        onRouteChange('home');

        navigate('/');
        
    }

   

    const [email, setSignInEmail] = useState('');
    const [password, setSignInPassWord] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setSignInPassWord(event.target.value);
    }

   /*  const onSubmitSignIn = () => {
        fetch('http://localhost:4000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log('user', user)
                if (user.id) {
                    console.log('user', user);
                    loadUser(user);
                    home();

                } else {
                    alert('incorrect submission');
                }
            })
    } */

    const onSubmitSignIn = () => {
        axios.post('https://shrouded-brushlands-00973.herokuapp.com/signin', {
            email: email,
            password: password,
        }).then(user => {
                console.log('user data', user.data);
                if (user === 'wrong credentials'){
                    alert("wrong credentials");
                }
                if (user.data._id) {
                    loadUser(user.data);
                    home();
                } else {
                    alert('incorrect submission');
                }
            }).catch(err => {
                console.log(err.response.data)
                alert(err.response.data)
            })
    }

    return (
        <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 white-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={onEmailChange} className="pa2 input-reset ba hover-bg-white hover-black w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={onPasswordChange} className="b pa2 input-reset ba hover-bg-white hover-black w-100" type="password" name="password" id="password" />
                        </div>

                    </fieldset>
                    <div className="white">
                        <input onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--white grow pointer f6 dib" type="button" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim white db">Register</p>

                    </div>
                </form>
            </main>
        </article>

    );
}

export default Signin;
