import React from "react";
import logoImage from "./th.jpeg";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={logoImage} alt="ICT logo"  className="logo-image" />
          </div>
          <div className="title">
            <h1>INFORMATION & <br /> COMMUNICATION TECHNOLOGY <br /> ACADEMY OF KERALA</h1>
            <span>ICTAK</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
