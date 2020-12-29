import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import login from '../action/action';
import Navbar from '../components/reusable/Navbar';
import './styles.css';

export default function Login(props) {

   const dispatch = useDispatch();
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");

   let btn = useSelector((state) => state.login.btn);
   let LoggedIn = useSelector((state) => state.login.LoggedIn);

   const inputEmail = (e) => {
     setEmail(e.target.value);
   }

   const inputPassword = (e) => {
     setPassword(e.target.value);
   }

    return (
        <>
        {
          
          LoggedIn ?
          <Redirect to = '/'/>
          :
          <Redirect to = '/Login'/>
        }
        <Navbar/>
        <div className = 'login__container'>
            <h3 className = 'border__bottom__text'>Sign in</h3>
            <input type = 'email' placeholder = 'Email ID' onChange = {inputEmail} className = 'login__input'/>
            <input type = 'password' placeholder = 'Password' onChange = {inputPassword} className = 'login__input'/>
            <button className = 'login__button' onClick = { () => dispatch(login(email,password))}>{btn}</button>
            <Link to = '/Register?user=Patient' className = 'login__link'>Not Registered Yet ?</Link>
        </div>
        </>
    )
}
