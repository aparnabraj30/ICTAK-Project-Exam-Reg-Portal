import React, { useState, useEffect } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa'; // Import the upload icon
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const containerStyle = {
    display: 'flex',
    gap: '45px'
};

const childStyle = {
    marginLeft: '-27px',
    marginRight: '10px',
};

const buttonContainerStyle = {
    marginTop: '100px',
    alignItems: 'center' // Corrected typo here
};


const UploadResults = () => {
    const [receiverEmail, setReceiverEmail] = useState('');
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
    }, [receiverEmail]);

    const handleFileUpload = (file) => {
        if (file) {
          console.log('Uploaded File:', file);
        
          const reader = new FileReader();
          reader.onloadend = () => {
            const fileContentBase64 = btoa(reader.result);
            setFile({
              name: file.name,
              type: file.type,
              content: fileContentBase64,
            });
      
            alert(`File '${file.name}' Uploaded Successfully! `);
            setIsFileUploaded(true);
          };
      
          reader.readAsBinaryString(file);
        } else {
          setIsFileUploaded(false);
          alert('Please select a file to upload.');
        }
      };
      


const handleSendResult = async () => {
    try {
      console.log('Receiver Email:', receiverEmail);
      if (!receiverEmail) {
        alert('Receiver email is required');
        return;
      }
  
      const result = await axios.post('http://localhost:8000/api/email/send-result', {
        receiverEmail,
        fileContent: file.content, // Use the base64-encoded content
      });
      alert(result.data.success || result.data.error);
    } catch (error) {
      console.error('Error sending result:', error.response);
    //   alert('Error sending result. Please try again.');
    }
  };
  
   

  const handleUrlSubmit = async () => {
    try {
      console.log('Submitted URL:', url);
  
      if (!url) {
        alert('URL is required.');
        return;
      }
  
      // Assuming you want to send the URL to the server
      const result = await axios.post('http://localhost:8000/api/url/submit', {
        url,
      });
  
      console.log('Result:', result.data);
      alert(result.data.success || result.data.error);
  
      // Set the state or perform any other actions based on the result if needed
  
    } catch (error) {
      console.error('Error submitting URL:', error.response);
      alert('Error submitting URL. Please try again.');
    }
  };
  
    return (
        <div style={containerStyle}>
            <div style={childStyle}>
                <Sidebar />
            </div>
            <div style={childStyle}>
                <h1 style={{ color: '#124653', fontSize: '50px', marginBottom: '50px', fontFamily: "Times New Roman", marginTop: "50px" }}>Upload Result</h1>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ border: '2px dashed #1eb2a6', borderRadius: '10px', background: "#f0f0f0", display: 'inline-block', padding: '10px',marginLeft: '180px', marginBottom: '50px',marginTop: '30px', }}>
                        <label htmlFor="fileInput" style={{ cursor: 'pointer', display: 'block', width: '300px', margin: '0 auto',height:'50px',paddingTop:'10px' }}>
                            <FaCloudUploadAlt style={{ marginRight: '10px', fontSize: '30px', verticalAlign: 'middle' }} />
                            <span style={{ verticalAlign: 'middle', fontSize: '18px',fontWeight:'20px' }}>Upload</span>
                            <input type="file" accept=".pdf" id="fileInput" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e.target.files[0])} />
                        </label>
                    </div>
                    <div style={{ marginTop: '20px',marginLeft: '35px', }}>
                    <label htmlFor="urlInput" style={{ color: '#888', marginTop: '10px', marginRight: '10px', }}>...or paste URL:</label>
                    <input
                        type="text"
                        id="urlInput"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={{ width: '1000px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px', height: '50px' }}
                    />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginLeft: '200px' }}>
                    <div>
                        <label htmlFor="receiverEmail" style={{ color: '#888', marginTop: '20px', marginRight: '10px',marginLeft: '-160px', marginBottom:'-50px' }}>Enter Recipient's Mail:</label>
                        <input
                                type="email"
                                id="receiverEmail"
                                value={receiverEmail}
                                onChange={(e) => {
                                    setReceiverEmail(e.target.value);
                                    console.log('Input Value:', e.target.value);
                                }}
                                style={{ width: '400px', padding: '10px', borderRadius: '5px', border: '1px solid #1eb2a6', marginTop: '70px', height: '45px' }}
                            />
                    </div>
            <button
                type="button"
                disabled={!isFileUploaded}
                onClick={handleSendResult}
                style={{
                    fontSize: '20px',
                    padding: '15px',
                    width: '200px',
                    marginTop: '-10px',
                    ...buttonContainerStyle,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                }}
            >
                           {loading ? 'Sending...' : 'Send Result'}
                        </button>
                </div>
            </div>
        </div>
    );
};

export default UploadResults;
