import React, { useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
import LinkSidebar from '../LinkSidebar'
import { Link } from 'react-router-dom'
import { faBell, faDatabase, faHome, faStethoscope, faWrench } from '@fortawesome/free-solid-svg-icons'
import {useAuthContext} from '../../hooks/useAuthContext'
const links = [
    {
        name: "Tổng quan",
        to: "/",
        icon: faHome,
        isNofity: false,
    },
    {
        name: "Điều khiển",
        to: "/control",
        isNofity: false,
        icon: faWrench
    }, {
        name: "Dữ liệu",
        isNofity: false,
        to: "/datalog",
        icon: faDatabase
    }, {
        name: "Chẩn đoán",
        to: "/chandoan",
        isNofity: true,
        icon: faStethoscope
    }, {
        name: "Thông báo",
        to: "/notification",
        isNofity: true,
        icon: faBell
    }
]
export default function Sidebar() {
  const {dispatch} = useAuthContext();
  const handleLogout = ()=>{
    dispatch({type: "LOGOUT", payload: null})
  }
  // const [active, setActive] = useState(123);
  return (
    <>
    <div className='sidebar-header'>
    <div className='sidebar-header-header'>
      <img src='./straberry.png'/>
      <h2>SMART HOME</h2>
    </div>
    <div className='sidebar-header-bottom'>
      {
        links.map((link, index)=>{
          return <LinkSidebar key={index} link={link}/>
        })
      }
    </div>
    </div>
   <div className='sidebar-bottom'>
    <button onClick={handleLogout}
      >Đăng xuất</button>
   </div>
    </>
  )
}
