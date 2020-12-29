import React from 'react'

export default function Header() {
    return (
        <div style = {styles.header}>
            <div className = 'highlight-words'>
                <h1>Online Appointment Became Easy</h1>
                <p>get all benifits for joining now </p>
                <h3>24/7 Support with Assistants</h3>
            </div>
            <div className = 'header-image'>
            
            </div>
        </div>
    )
}


const styles = {
    header:{
        'width':'100%',
        'height':'330px',
        'backgroundColor':'#1f3a93'
    }
}