import React from 'react'
import { useGlobalContext } from '../../context'
import "./BodyLogin.scss"
export default function BodyLogin() {
    const { setUser } = useGlobalContext();
    const handleSubmit = () => {
        setUser(true);
    }
    
    return (
        <div className='body-login'>
            <div className='body-login-left'>
                <img src='./farm.jpg' />
            </div>
            <div className='body-login-right'>
                <h2>Welcome To Strawberry farm</h2>
                <h3>Login</h3>
                <input placeholder='Username' type="text" />
                <input placeholder='Password' type="password" />

                <button className='btn-login' onClick={handleSubmit}>Login</button>
                <button className='btn-signup'>Goto sign up</button>
            </div>
        </div>
    )
}
