import React from "react"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />
        </div>
        <div className="coursesCard">
            <div className='coursesCard'>
              <div className='grid2'>
                {coursesCard.slice(0, 3).map((val) => (
                  <div className='items'>
                    <div className='content flex'>
                      <div className='left'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                      </div>
                      <div className='text'>
                        <h1>{val.coursesName}</h1>
                      </div>
                    </div>
                    <button className='outline-btn'>ENROLL NOW !</button>
                  </div>
                ))}
              </div>
            </div>

            <div className='coursesCard'>
              {/* copy code form  coursesCard */}
              <div className='grid2'>
                {coursesCard.slice(3, 6).map((val) => (
                  <div className='items'>
                    <div className='content flex'>
                      <div className='left'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                      </div>
                      <div className='text'>
                        <h1>{val.coursesName}</h1>
                      </div>
                    </div>
                    {/* <div className="outline-btn"> */}
                    <button className='outline-btn'>ENROLL NOW !</button>
                    {/* </div> */}
                    
                  </div>
                ))}
              </div>
            </div>
           </div>
      </section>
    </>
  )
}

export default HAbout
