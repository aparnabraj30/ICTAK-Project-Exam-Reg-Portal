import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ADashboard = () => {

    const containerStyle = {
        display: 'flex',  
    };

    const childStyle = {
        marginLeft : '-27px',
        marginRight: '10px', 
    };

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '200px',
        paddingTop: '20px',
        margin: '30px',
        marginBottom: '50px',
        borderRadius: '30px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)', 
    };
    
    const cardContentStyle = {
        flex: 1,
    };
    
    const buttonStyle = {
        borderRadius: '20px',
        minWidth: '130px',
        backgroundColor: '#1eb2a6',
        color: '#fff',
        height: '42px',
        marginBottom: '30px',
    };

    const titleStyle = {
        fontSize: '28px', 
        fontFamily: 'Times New Roman, Times, serif',
        fontWeight: 'bold'
    };

    const [batches, setBatches] = useState([]);

    const fetchBatches = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/batches");
          const updatedBatches = await Promise.all(
            response.data.map(async (batch) => {
              const studentsResponse = await axios.get(`http://localhost:8000/api/students/${encodeURIComponent(batch.title)}`);
              batch.students = studentsResponse.data;
              return batch;
            })
          );
          setBatches(updatedBatches);
        } catch (error) {
          console.error("Error fetching batches:", error);
        }
      };

    console.log(batches);
    
    useEffect(() => {
      fetchBatches();
  }, []);

    return (
      <div style={containerStyle}>
          <div style={childStyle}>
              <Sidebar />
          </div>
          <div style={childStyle}>
              <h1 style={{ color: '#124653', fontSize: '50px', paddingTop: '30px', marginBottom: '30px', fontFamily: "Times New Roman" }}>Dashboard</h1>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {batches && batches.map((batch, index) => (
                      <Card key={index} style={cardContainerStyle}>
                          <CardContent style={cardContentStyle}>
                              <Typography gutterBottom variant="h5" component="div" style={titleStyle}>
                                  {batch.title}
                              </Typography>
                          </CardContent>
                          <CardActions style={{ paddingLeft: '13px', gap: '90px' }}>
                          <Link to={`/students/${encodeURIComponent(batch.title)}`}>
                                  <Button size="small" style={buttonStyle}>
                                      View Students
                                  </Button>
                              </Link>
                              <Link to="/results">
                                  <Button size="small" style={buttonStyle}>
                                      Result
                                  </Button>
                              </Link>
                          </CardActions>
                      </Card>
                  ))}
              </div>
          </div>
      </div>
  );
 };
export default ADashboard;