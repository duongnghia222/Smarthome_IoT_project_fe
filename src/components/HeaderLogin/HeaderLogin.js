import React from 'react'
import "./HeaderLogin.scss"
export default function HeaderLogin() {
  return (
    <div className='login-header'>
      <div className='login-header-wrap'>

        <div className='login-header-left'>
          <img src='./straberry.png'/>
          <h2>SMART HOME</h2>
        </div>
        <div className='login-header-right'>
          <h4>
            Homepage
          </h4>
          <h4>
          Map
          </h4>
        </div>
      </div>
    </div>
  )
}
