import { faBell, faCaretDown, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import { FaTimes } from 'react-icons/fa'
import "./style.scss"
import { username } from '../../utils/env'
export default function Header() {
  return (
    <div className='header-home'>
      <div className='header-home-wrap'>
        <div className='header-home-left'

        >
          <h2>Chào mừng trở lại, {username}</h2>
          <p>Đây là hệ thống chăm sóc dâu tây môn Đồ án đa ngành</p>
        </div>
        <div className='header-home-right'>
          <div>
            <FontAwesomeIcon icon={faGear}/>
          </div>
          <div>
          <FontAwesomeIcon icon={faBell}/>
          </div>
          <div className='name-user'>
            <img  src="./bedautay.png" alt='bedautay' className='avar-user'/>
            <h2>{username}</h2>
            <FontAwesomeIcon icon={faCaretDown}/>
          </div>
        </div>
      </div>
      </div>
  )
}
