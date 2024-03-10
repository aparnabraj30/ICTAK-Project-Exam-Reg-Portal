import React, { Component, useState } from "react"
import {NavLink} from "react-router-dom"
import { Link as ScrollLink } from "react-scroll";
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          <li>
              <NavLink to={"/"} activeClassName="active" style={{background: "none"}}>
                Home
              </NavLink>
            </li>
            <li>
            <ScrollLink to="exploreCourses" smooth={true} duration={500}>
              Courses
            </ScrollLink>
            </li>
            <li>
              <NavLink to={"/about"} activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/team"} activeClassName="active">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={"/login"} activeClassName="active">
                Login
              </NavLink>
            </li>
          </ul>

          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
