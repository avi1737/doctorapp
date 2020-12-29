import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,Redirect,useHistory,useLocation } from 'react-router-dom';
import { signup } from '../action/action';
import Navbar from '../components/reusable/Navbar';
import './styles.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Register() {

    const history = useHistory();
    const dispatch = useDispatch();
    const query = useQuery();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");

   const btntext = useSelector((state) => state.signup.btn);
   
   const signedUp = useSelector((state) => state.signup.SignedUp);


   const inputEmail = (e) => {
     setEmail(e.target.value);
   }

   const inputPassword = (e) => {
     setPassword(e.target.value);
   }

   const inputPhone = (e) => {
    setPhone(e.target.value);
  }


    return (
        <>
        {
          signedUp ?
          <Redirect to = '/'/>
          :
          <Redirect to = '/Register?user=Patient'/>
        }
        <Navbar/>
        <div className = 'login__container'>
            <h3 className = 'border__bottom__text'>Register</h3>
            <input type = 'email' placeholder = 'Email ID' className='login__input' onChange = {inputEmail}/>
            <input type = 'password' placeholder = 'Password' className='login__input' onChange = {inputPassword}/>
            <input type = 'phone' placeholder = 'Mobile Number' className='login__input' onChange = {inputPhone}/>
            <button text = 'Sign Up' className = 'login__button' onClick = { () => dispatch(signup(email,password,phone,query.get('user')))}>{btntext}</button>
            <Link to = '/Login'>Already have an account?</Link>
            <br/>
            <Link to = '/Register?user=Doctor'>Sign up as Doctor?</Link>
        </div>
        </>
    )
}