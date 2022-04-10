import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = ({ onRouteChange, LoadUser }) => {

    const navigate = useNavigate();

    const home = () => {
        onRouteChange('home');
        navigate('/');
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onSubmitSignIn = () => {
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log('log', user[0].entry)
                console.log('user length', user.length)

                if (user.length === 1) {
                    home();
                } else {
                    alert('incorrect submission')
                }

            })
    }

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input onChange={onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Role</label>
                            <select id="types" className="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="">
                                <option value="">Accont Type</option>
                                <option label="Customer" value="2">
                                </option>
                                <option label="Admin" value="12">
                                </option>
                                <option label="Seller" value="22">
                                </option>

                            </select>
                        </div>

                    </fieldset>
                    <div className="">
                        <input onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" type="button" value="Register" />
                    </div>

                </form>
            </main>
        </article>

    );
}

export default Register;
