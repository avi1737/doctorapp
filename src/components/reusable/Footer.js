import React from 'react'
import FooterItem from './FooterItem';

const footerHeadings = [
    {
        'heading':'For Patients',
        'listItems':['search for doctor','search for clinic','search for hospital','HomiGe Help']
    },
    {
        'heading':'For Doctors',
        'listItems':['search for Clinic','Your Friends','Social media','do Promotions']
    },
    {
        'heading':'For Patients',
        'listItems':['search for doctor','search for clinic','search for hospital','HomiGe Help']
    },
    {
        'heading':'For Doctors',
        'listItems':['search for Clinic','Your Friends','Social media','do Promotions']
    },
    {
        'heading':'For Patients',
        'listItems':['search for doctor','search for clinic','search for hospital','HomiGe Help']
    },
    {
        'heading':'For Doctors',
        'listItems':['search for Clinic','Your Friends','Social media','do Promotions']
    }
];

const Footer = () => {
    return(
        <>
        <div style = {styles.mainfooter}>
        <div style = {styles.footer}>
            {
                footerHeadings.map(
                    (item)=> <FooterItem heading = {item.heading} list = {item.listItems}/>
                )
            }
        </div>
        <div>
        <h1>Copyright © 2017, Practo. All rights reserved.</h1>
        </div>
        </div>
        </>
    )
}

export default Footer;


const styles = {
    mainfooter:{
        'flexDirection':'column',
        'display':'flex',
        'width':'100%',
        'height':'auto',
        'backgroundColor':'#1f3a93',
        'position':'fixed',
        'bottom':'0px',
    },
    footer:{
        'display':'flex',
        'padding':'50px 120px',
        'gap':'20px',
        'flex':'1fr 1fr 1fr 1fr 1fr 1fr'
    }
}