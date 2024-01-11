import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import "./LeftSidebar.css"
import shorts from './shorts.png'
import { NavLink } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='container_leftSidebar'>
        <NavLink to={'/'} className="icon_sidebar_div">
            <AiOutlineHome size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <NavLink to={"/abs"} className="icon_sidebar_div">
            <MdOutlineExplore size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Explore</div>
        </NavLink>
        <NavLink to={"/abs"} className="icon_sidebar_div">
            <img src={shorts} alt='S' width={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Shorts</div>
        </NavLink>
        <NavLink to={'/abhas'} className="icon_sidebar_div">
            <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon" style={{fontSize: "12px"}}>Subscriptions</div>
        </NavLink> 
        <NavLink to={"/library"} className="icon_sidebar_div">
            <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon" style={{fontSize: "12px"}}>Library  </div>
        </NavLink> 
    </div>
  )
}

export default LeftSidebar