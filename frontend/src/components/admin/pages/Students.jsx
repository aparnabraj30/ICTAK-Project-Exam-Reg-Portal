import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const containerStyle = {
    display: 'flex',
    gap: '45px',
    
};

const childStyle = {
    marginLeft: '-27px',
    marginRight: '10px',
    
};

const tableStyle = {
    width: '154%', // Increased width of the table
    borderCollapse: 'collapse',
    marginTop: '20px',
    // fontFamily: 'Times New Roman'
    
};

const thTdStyle = {
    border: '1px solid #dddddd',
    textAlign: 'center',
    padding: '20px',
    height: '60px',
    paddingLeft: '20px', // Adjusted paddingLeft
    backgroundColor: '#0D2426', // Background color set to #0D2426
    color: '#ffffff',
};

const tbodyStyle = {
    textAlign: 'center',
    padding: '20px',
    height: '150px',
    paddingLeft: '20px',
};


  

const StudentsList = () => {
  const { batchName } = useParams();
  const [students, setStudents] = useState([]);

    useEffect(() => {
        console.log('Batch Name:', batchName);
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/students/${batchName}`);
                console.log('Fetched students:', response.data); 
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, [batchName]);

    const getRowStyle = (params) => {
        return {
          backgroundColor: params.index % 2 === 0 ? '#ffffff' : '#d3d9d4',
          '&:hover': {
            backgroundColor: params.index % 2 === 0 ? '#ffffff' : '#d3d9d4',
          },
        };
      };

      const toPascalCase = (str) => {
        return str.replace(/\w+/g, function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
    };
      return (
        <div style={containerStyle}>
            <div style={childStyle}>
                <Sidebar />
            </div>
            <div style={childStyle}>
                <h1 style={{ color: '#124653', fontSize: '50px', paddingTop: '30px', marginBottom: '50px', fontFamily: "Times New Roman" }}>Eligible Students - {batchName}</h1>
                <table style={tableStyle}>
                    <thead>
                    <tr style={thTdStyle}>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>DoB</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody style={tbodyStyle}>
                        {students.map((student, index) => (
                            <tr key={index} style={getRowStyle({ index })}>
                                <td>{index + 1}</td>
                                <td>{toPascalCase(student.name)}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{new Date(student.dob).toLocaleDateString('en-GB')}</td>
                                <td>{student.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsList;
