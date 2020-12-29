import axios from '../axios';
import { LOGIN_FAILURE,
     LOGIN_REQUEST, 
     LOGIN_SUCCESS,
     LOGOUT_REQUEST,
     SIGNUP_REQUEST,
     SIGNUP_SUCCESS,
     SIGNUP_FAILURE
} from "./action.types";
import { Redirect } from "react-router-dom";

export const login_request = (email,password) => ({
    type:LOGIN_REQUEST,
    payload:{
        email:email,
        password:password,
        buttontext:'Wait..'
    }
});

export const login_success = (user_type) => ({
    type:LOGIN_SUCCESS,
    payload:user_type
});

export const login_failure = () => ({
    type:LOGIN_FAILURE,
    payload:''
});


export const signup_request = (email,password,phone,user_type) => ({
    type:SIGNUP_REQUEST,
    payload:{
        email:email,
        password:password,
        phone:phone,
        user_type:user_type,
        buttontext:'Signing Up..'
    }
});

export const signup_success = (user_type) => ({
    type:SIGNUP_SUCCESS,
    payload:{
        'status':true,
        'user_type':user_type
    }
});

export const signup_failure = (error_msg) => ({
    type:SIGNUP_FAILURE,
    payload:{
        'errormsg':error_msg,
        'signupstatus':false
    }
});

export const logout_request = () => ({
    type:LOGOUT_REQUEST,
    payload:''
})

export const login = (email,password) => async (dispatch) => {

    dispatch(login_request(email,password));
    
    let formdata = new FormData();
    formdata.append('email',email);
    formdata.append('password',password);

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

    await axios.post("auth/login",formdata,config)
    .then((res) => {
        let user_type_id = res.data.data.user_type;
        let token = res.data.data.token;
        let email = res.data.data.email;
        let user_id = res.data.data.user_id;
        localStorage.setItem('token',token);
        localStorage.setItem('email',email);
        localStorage.setItem('user_id',user_id);

        if( user_type_id === '2'){
            dispatch(login_success('Doctor'));
            localStorage.setItem('user_type','Doctor');
        }
        else if( user_type_id === '3'){
            dispatch(login_success('Patient'));
            localStorage.setItem('user_type','Patient');
        }
    })
    .catch( (err) => {
        login_failure(err);
    })
}

export const signup = (email,password,phone,user_type) => async (dispatch) => {

    dispatch(signup_request(email,password,phone,user_type));   
    let formdata = new FormData();
    formdata.append('email',email);
    formdata.append('password',password);
    formdata.append('phone',phone);
    formdata.append('user_type',user_type);

    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    } 

    await axios.post('auth/register',formdata,config)
    .then( (res) => {
        if( res.data.data.message ==='user already exits'){
            dispatch(signup_failure("Email or Phone Number Already Registered."))
        }
        else{
        dispatch(signup_success(user_type));
        let token = res.data.data.token;
        let email = res.data.data.email;
        let user_id = res.data.data.user_id;
        localStorage.setItem('token',token);
        localStorage.setItem('email',email);
        localStorage.setItem('user_id',user_id);
        localStorage.setItem('user_type',user_type);
        }
    })
    .catch( (err) => {
        dispatch(signup_failure(err));
    })
}



export const fetch_doctor_profile = () => async () => {
    let user_id = localStorage.getItem('user_id');
    const config = {     
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }
    await axios.get(`doctor/detail?user_id=${user_id}`,config)
    .then((res) => {
        console.log(res.data.data);
    })
    .catch( (err) => {
        console.log(err);
    });
}

export default login;