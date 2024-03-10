import React from "react"
import Back from "../common/back/Back"
import { Element } from "react-scroll";
import CoursesCard from "./CoursesCard"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <Element name="exploreCourses"/>
      <CoursesCard/>
    </>
  )
}

export default CourseHome
