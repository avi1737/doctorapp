import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './styles.css';
import axios from 'axios';
import { cities, Specailization } from '../../utils';
import { fetch_doctor_profile } from '../../action/action';

export default function Profile() {

    const [email,setEmail] = useState('');
    const [first_name,setFn] = useState('');
    const [last_name,setLn] = useState('');
    const [date_joined,setDj] = useState('');
    const [isLoding,setLoding] = useState(true);

    useEffect(() =>{
        let user_id = localStorage.getItem('user_id');
        const config = {     
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        axios.get(`http://localhost:8080/doctor/detail?user_id=${user_id}`,config)
        .then((res) => {
            const profile = res.data.data;
            setEmail(profile.email);
            setFn(profile.first_name);
            setLn(profile.last_name);
            setDj(profile.date_joined);
            setLoding(false);
        })
        .catch( (err) => {
            console.log(err);
        });
    },[]);

    return (
        <>
        {
            false ?
            <h4>Profile Loading..</h4>
            :
            <div className = 'input__main__container'>

                <div className = 'input__container'>
                <div className = 'profile__box'>    
                <label className = 'profile__label'>Email</label>
                <input type = 'email' className = 'profile__input'/>
                </div>

                <div className = 'profile__box'> 
                <label className = 'profile__label'>First Name</label>
                <input type = 'text' className = 'profile__input'/>
                </div>

                <div className = 'profile__box'> 
                <label className = 'profile__label'>Last Name</label>
                <input type = 'text' className = 'profile__input'/>
                </div>
                </div>

                <div className = 'input__container'>
                <div className = 'profile__box'>
                <label className = 'profile__label'>Date Joined</label>
                </div>

                <div className = 'profile__box'>
                <label className = 'profile__label'>Specailization</label>
                <select className = 'profile__select'>
                    {
                        Specailization.map((item) => <option>{item}</option>)
                    }
                </select>
                </div>

                <div className = 'profile__box'> 
                <label className = 'profile__label'>Mobile No.</label>
                </div>
                </div>

                <div className = 'input__container'>
                <div className = 'profile__box'>    
                <label className = 'profile__label'>Fees</label>
                <input type = 'text' className = 'profile__input'/>
                </div>

                <div className = 'profile__box'> 
                <label className = 'profile__label'>Year of Experience</label>
                <input type = 'number' className = 'profile__input'/>
                </div>

                <div className = 'profile__box'> 
                <label className = 'profile__label'>City</label>
                <select className = 'profile__select'>
                    {
                        cities.map( (item,index) => <option>{item}</option>)
                    }
                </select>
                </div>
                </div>

                <div className = 'input__container'>    
                <label className = 'profile__label'>About Yourself</label>
                <textarea className = 'profile__input'></textarea>
                </div>
                <button>Save Changes</button>
            </div>

        }
        </>
    )
}
