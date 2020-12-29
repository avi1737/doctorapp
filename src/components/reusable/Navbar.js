import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout_request } from '../../action/action';

const Navbar = () => {

    const dispatch = useDispatch();
    const LoggedIn = useSelector( (state) => state.login.LoggedIn);
    const SignedUp = useSelector((state) => state.signup.SignedUp);
    let usertype = localStorage.getItem('user_type');

    const logout = () => {
        localStorage.clear();
        dispatch(logout_request());
    }
    

    return(
        <div style = {styles.navbar}>
            <div className = 'nav-logo'>
                <Link style = {styles.brandlogo} to = '/'>HomiGe</Link>
            </div>
            <div style = {styles.navlist}>
                <div className = 'nav-item'>
                    <Link style = {styles.navitem} to = ''>Doctors</Link>
                    <p style = {styles.imptext}>Book an Appointment</p>
                </div>
                <div className = 'nav-item'>
                    <Link style = { styles.navitem} to = ''>Consultation</Link>
                    <p style = {styles.imptext}>Free Consultation</p>
                </div>
                <div className = 'nav-item'>
                    <Link style = {styles.navitem} to = ''>Medical Products</Link>
                    <p style = {styles.imptext}>Buy Products</p>
                </div>
                <div className = 'nav-item'>
                    <Link style = {styles.navitem} to = ''>Benifits</Link>
                    <p style = {styles.imptext}>Check Benifits</p>
                </div>
            </div>
            {
                LoggedIn || SignedUp ?
                <div style = {styles.navoptions}>
                <p>{localStorage.getItem('email')}</p>
                <div style = {styles.dropdown}>
                    <ul>
                        <Link to = {`/${usertype}/dashboard`} style = {styles.dropdownitem}>Dashboard</Link>
                        <button onClick = {logout} style = {styles.dropdownitem}>Logout</button>
                    </ul>
                </div>  
                </div>
                :
                <div className = 'nav-options'>
                <Link style = {styles.loginSignupLink} to = '/Login'> Login/Signup </Link>
                </div> 

            }
            
        </div>
    )
}

const styles = {
    navbar:{
        'width':'100%',
        'display':'grid',
        'height':'80px',
        'boxShadow':'0 3px 2px -2px rgba(0,0,0,.2)',
        'position':'sticky',
        'padding':'0 120px',
        'alignItems':'center',
        'gridTemplateColumns':'15% 60% 20%',
        'gridTemplateRows':'1fr',
        'top':'0',
        'zIndex':'100'
    },
    brandlogo:{
        'color':'#1f3a93',
        'fontSize':'24px',
        'fontWeight':'bold',
        'textDecoration':'none'
    },
    navlist:{
        'display':'flex',
        'flex':'1fr 1fr 1fr 1fr',
        'gap':'40px'
    },
    navitem:{
        'width':'',
        'fontWeight':'600',
        'fontSize':'18px',
        'textDecoration':'none',
        'color':'black'
    },
    imptext:{
        'fontSize':'14px',
        'color':'grey',
        'fontWeight':'400'
    },
    loginSignupLink:{
        'textDecoration':'none',
        'color':'white',
        'padding':'8px 10px',
        'border':'1px solid #1f3a93',
        'backgroundColor':'#1f3a93'
    },
    navoptions:{
        'position':'relative'
    },
    dropdown:{
        'position':'absolute',
        'top':'40px',
        'boxShadow':'0 4px 6px -1px rgba(0,0,0,.2)',
        'left':'30%',
        'width':'250px',
        'height':'auto',
        'padding':'15px 30px',
        'background':'#1f3a93',
        'color':'white',
        'display':'flex',
        'flexDirection':'column'
    },
    dropdownitem:{
        'padding':'12px',
        'color':'white',
        'textDecoration':'none',
    }
}

export default Navbar;
