import { faBell, faCaretDown, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import "./style.scss"
import { username } from '../../utils/env'

function TimeOfDay() {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay("sáng");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay("chiều");
    } else {
      setTimeOfDay("tối");
    }
  }, []);

  return (
    <p>Buổi {timeOfDay ? timeOfDay : "sáng"} tốt lành</p>
  );
}

export default function Header() {
  return (
    <div className='header-home'>
      <div className='header-home-wrap'>
        <div className='header-home-left'>
          <h2>Chào mừng trở lại, {username}</h2>
          <TimeOfDay />
        </div>
        <div className='header-home-right'>
          <div>
            <FontAwesomeIcon icon={faGear}/>
          </div>
          <div>
          <FontAwesomeIcon icon={faBell}/>
          </div>
          <div className='name-user'>
            <img  src="./man.png" alt='user' className='avar-user'/>
            <h2>{username}</h2>
            <FontAwesomeIcon icon={faCaretDown}/>
          </div>
        </div>
      </div>
    </div>
  )
}
