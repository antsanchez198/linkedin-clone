import React from 'react'
import "./Header.css"
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';

import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='header'>

        <div className="header-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="" />
            <div className="header-search">
                <SearchIcon/>
                <input type='text'/>
            </div>
        </div>

        <div className="header-right">
            <HeaderOption Icon={HomeIcon} title = "Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title = "My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
            <HeaderOption Icon={ChatIcon} title = "Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title = "Notifications"/>
            <HeaderOption avatar="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" title = "Me"/>
        </div>
    </div>
  )
}

export default Header