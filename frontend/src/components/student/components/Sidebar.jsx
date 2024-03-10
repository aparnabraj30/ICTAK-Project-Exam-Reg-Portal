import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaStar,
    FaCommentAlt,
    FaSignOutAlt,
}from "react-icons/fa";
import "./Sidebar.css";
import Logo from "./th.jpeg"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/studentdashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            // path:"/about",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            // path:"/analytics",
            name:"Grades",
            icon:<FaStar/>
        },
        {
            // path:"/comment",
            name:"Notifications",
            icon:<FaCommentAlt/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaSignOutAlt/>
        },
        
    ]
    return (
        <div className="container" style={{fontFamily: "Times New Roman"}}>
           <div 
                style={{width: isOpen ? "300px" : "120px", left: "-500px"}} 
                className="sidebar"
            >
            <div className="top_section">
                <h1 
                    style={{
                        display: isOpen ? "block" : "none", 
                        textAlign: 'center'
                    }} 
                    className="logo"
                >
                    <img
                        src={Logo}  // Update the path accordingly
                        alt="logo"
                        style={{ maxWidth: '30%', height: 'auto' }}
                    />
                    <br />
                        <p style={{whiteSpace: 'nowrap'}} className='ict'>ICT Academy of Kerala <br /> STUDENT</p>
                    </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "20px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink 
                            to={item.path} 
                            key={index} 
                            className="link" 
                            activeclassName="active"
                        >
                        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: isOpen ? "flex-end" : "flex-start",marginLeft: isOpen ? "15px" : "10px", }}>
                           <div className="icon" style={{ color: "#fff", fontSize: "22px", background: "none", marginRight: "10px" }}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none", verticalAlign: "middle",  paddingBottom: "8px" }} className="link_text">{item.name}</div>
                        </div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;