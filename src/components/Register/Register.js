import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ onRouteChange, loadUser }) => {

    const navigate = useNavigate();

    const home = () => {
        onRouteChange('home');
        navigate('/');
    }

    const [accountType, setAccountType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const onDobChange = (event) => {
        setDob(event.target.value);
    }

    console.log(accountType);

    /* const onSubmitSignIn = () => {
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                address: address,
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log('user', user);
                if (user.length === 1) {
                    loadUser(user[0]);
                    home();
                } else {
                    alert('incorrect submission')
                }

            })
    } */

    const onSubmitSignIn = () => {
        axios.post('https://shrouded-brushlands-00973.herokuapp.com/register', {
            email: email,
            password: password,
            name: name,
            address: address,
            dob: dob,
            account: accountType
        })
            .then(user => {
                console.log('user data', user.data);
                if (user.data._id) {
                    loadUser(user.data);
                    home();
                } else {
                    alert('incorrect submission');
                }
            }).catch(error => {
                console.log(error);
                alert('please fill out all the fields');
            })

    }

    return (
        <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 white-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input onChange={onNameChange} className="pa2 input-reset ba  hover-bg-white hover-black w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={onEmailChange} className="pa2 input-reset ba hover-bg-white hover-black w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Address</label>
                            <input onChange={onAddressChange} className="pa2 input-reset ba hover-bg-white hover-black w-100" type="text" name="address" id="address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Date of Birth</label>
                            <input onChange={onDobChange} className="pa2 input-reset ba hover-bg-white hover-black w-100" type="date" name="dob" id="dob" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={onPasswordChange} className="b pa2 input-reset ba hover-bg-white hover-black w-100" type="password" name="password" id="password" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Role</label>
                            <select id="types" className="b pa2 input-reset ba hover-bg-white hover-black w-100" name="role"
                                value ={accountType}
                                onChange={(event) => {
                                    const selectedAccount = event.target.value;
                                    setAccountType(selectedAccount);
                                }}>
                               
                                <option label="Customer" value="customer">
                                </option>
                                <option label="Admin" value="admin">
                                </option>
                                <option label="Seller" value="seller">
                                </option>

                            </select>
                            {/* {console.log(accountType)}
                            {accountType} */}
                        </div>

                    </fieldset>
                    <div className="">
                        <input onClick={onSubmitSignIn} className="b ph3 pv2 input-reset ba b--white grow pointer f6 dib pointer" type="button" value="Register" />
                    </div>

                </form>
            </main>
        </article>

    );
}

export default Register;
