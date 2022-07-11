import React from 'react'
import './navbar.css'
import { FaUserCircle } from 'react-icons/fa'

const navbar = () => {
    return (
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search..." size="50"/>
                <button style={{marginLeft: "10px"}}>Search</button>
            </div>
            <div className="UserProfile">
                <FaUserCircle  className="icon"/>
                <p>Albert Barnabas</p>
            </div>
        </div>
    )
}

export default navbar