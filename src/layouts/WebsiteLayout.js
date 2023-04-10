import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import "./WebsiteLayout.scss"

export default function WebsiteLayout() {
    return (
        <div className="home">
            <div className="home-sidebar">
                <Sidebar />
            </div>
            <div className="home-body">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
