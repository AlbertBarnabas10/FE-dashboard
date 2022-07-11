import React from 'react'
import './sidebar.css'
import { RiCalendarEventFill } from 'react-icons/ri'

const sidebar = () => {
    return (
        <div className="SideBar">
            <div className="top">
                <h2>AbeDashboard</h2>
            </div>
            <hr />
            <div className="center">
                <h6>Category</h6>
                <ul>
                    <li>
                        <RiCalendarEventFill className="icon"/>
                        <span>Events</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default sidebar