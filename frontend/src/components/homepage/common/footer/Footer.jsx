import React from "react"
import "./footer.css"
// import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ICTAK</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                <b>Address</b> &nbsp; Head Quarters
G1, Ground Floor, Thejaswini, Technopark Campus
Thiruvananthapuram, Kerala, India - 695 581
Office: +91 471 270 0811
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <b>Phone</b>&nbsp;+91 75 940 51437
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <b>Email</b>&nbsp;info@ictkerala.org
              </li>
            </ul>
          </div>
        </div>
      </footer>
  
    </>
  )
}

export default Footer
