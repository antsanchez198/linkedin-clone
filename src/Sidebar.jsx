import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <img />
                <Avatar className='sidebar-avatar' />
                <h2>Anthony Sanchez</h2>
                <h4>Youtuber/Mentor & Frontend Developer with 1 year of experience</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className='sidebar-statNumber'>2,543</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className='sidebar-statNumber'>2,543</p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar