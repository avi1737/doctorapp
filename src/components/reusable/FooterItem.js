import React from 'react'

export default function FooterItem(props) {
    return (
        <div style = {styles.footeritem}>
        <h2 style = {styles.footerheading}>{props.heading}</h2>
        {
            <ul style = {styles.ulist}>
                {
                    props.list.map((item) => <li style = {styles.ulistitem}>{item}</li>)
                }
            </ul>
        }
        </div>
    )
}

const styles = {
    footerheading:{
        'color':'#fff',
        'fontSize':'24px',
    },
    footeritem:{
        'display':'flex',
        'flexDirection':'column',
        'width':'250px'
    },
    ulist:{
        'listStyle':'none'
    },
    ulistitem:{
        'color':'white',
        'padding':'6px 0px'
    }
}