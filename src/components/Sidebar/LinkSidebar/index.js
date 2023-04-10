import React from 'react'
import { Link } from 'react-router-dom';

import "./style.scss"

export default function LinkSidebar({ link }) {

    return (
        <div className='link-single'>
            <Link to={link.path}>
                <div className='link-single-left'>
                    {link.icon} <h3>{link.name}</h3>
                </div>
            </Link>
        </div>
    )
}
