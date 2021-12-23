import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from 'react/cjs/react.development'
import './Sidebar.css'
import PlayerCards from './PlayerCards'


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
        <div className="sidebar" style={{position: 'relative', zIndex: '0'}}>
            <Link to='#' className="menu-bars" onClick={showSidebar} style={{fontSize: '20px'}}>
                Scoreboard
                <FaIcons.FaBars size={40} style={{color: 'blue', marginLeft: '5px'}}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars" onClick={showSidebar}>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <PlayerCards/>
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
