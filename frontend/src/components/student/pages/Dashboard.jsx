import React from 'react';
import Sidebar from '../components/Sidebar';
import Form from '../components/form/Form';

const SDashboard = () => {

    const containerStyle = {
        display: 'flex',  // Use flexbox layout
    };

    const childStyle = {
        marginLeft : '-27px',
        marginRight: '10px',  // Add margin between Sidebar and Form
    };
    return (
        <div style={containerStyle}>
            <div style={childStyle}>
                
            <Sidebar/>
            </div>
            <div style={childStyle}>
                <h1 style={{color: '#1eb2a6', fontSize:'50px', paddingTop:'10px', fontFamily: "Times New Roman"}}>Dashboard</h1>
                <Form />
            </div>
        </div>
    );
};

export default SDashboard;