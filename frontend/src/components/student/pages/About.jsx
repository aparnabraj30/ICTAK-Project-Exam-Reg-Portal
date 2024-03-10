import React from 'react';
import Sidebar from '../Components/Sidebar';
const About = () => {

    const containerStyle = {
        display: 'flex',  // Use flexbox layout
    };

    const childStyle = {
        marginRight: '20px',  // Add margin between Sidebar and Form
    };
    return (
        <div style={containerStyle}>
            <div style={childStyle}>
             <Sidebar/>
            </div>
            <div style={childStyle}>
             <h1>About page</h1>
             </div>
        </div>
    );
};

export default About;