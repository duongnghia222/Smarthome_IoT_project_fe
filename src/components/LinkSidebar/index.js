import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function LinkSidebar({link}) {
  return (
    <NavLink
    to={link.to}
    className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? "link-single active" : "link-single"
  }
    >
        <div className='link-single-left'>
            <FontAwesomeIcon icon={link.icon}/> <h3>{link.name}</h3>
        </div>
        {link.isNofity && <div className='link-single-right'>1</div>}
    </NavLink>
  )
}
