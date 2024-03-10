import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/homepage/about/About.jsx"
import Team from "./components/homepage/team/Team"
import Contact from "./components/homepage/contact/Contact"
import Home from "./components/homepage/home/Home"
import SignIn from "./components/login/Login"
import SDashboard from './components/student/pages/Dashboard.jsx';
import ADashboard from './components/admin/pages/Dashboard.jsx';
import Results from './components/admin/pages/UploadResults.jsx';
import StudentsList from './components/admin/pages/Students.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          {/* <Route exact path="/courses" element={<CourseHome/>} /> */}
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/contact" element={<Contact/>} />         
          <Route path="/login" element={<SignIn/>} />
          <Route path="/studentdashboard" element={<SDashboard />} />
          <Route path="/admindashboard" element={<ADashboard />} />
          <Route path="/students/:batchName" element={<StudentsList />} />
          <Route path="/results" element={<Results />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;