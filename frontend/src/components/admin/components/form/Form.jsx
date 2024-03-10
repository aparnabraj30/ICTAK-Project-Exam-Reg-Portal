import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Form.css';

function Form() {
  const history = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Invalid email format';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onClickBackToDashBoard = () => {
    setIsFormSubmitted(false);
    history.push('/');
  };

  const onChangeHandler = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log(formData);
      setIsFormSubmitted(true);
      console.log('Submitted');
    } else {
      console.log('Form validation failed');
    }
  };

  const onClosePopup = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div className="Form">
      {!isFormSubmitted && (
        <form onSubmit={onSubmitHandler} disabled={isFormSubmitted}>
          <div className="form">
            <div className="heading">
              <h1>Send Result</h1>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                name="email"
                onChange={(e) => onChangeHandler(e.target.value, 'email')}
                value={formData.email}
                required
              />
              {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                name="subject"
                onChange={(e) => onChangeHandler(e.target.value, 'subject')}
                value={formData.subject}
                required
              />
            </div>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', borderRadius:'0.375rem', marginBottom:'60px' }}>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <ReactQuill
                value={formData.message}
                onChange={(value) => onChangeHandler(value, 'message')}
                style={{ height: '200px', width:'73.5%', borderRadius: '0.375rem' }}
              />
            </div>


            <div className="form-group">
              <button className="btn" type="submit" style={{ fontFamily: 'Times New Roman' }}>
                Send
              </button>
            </div>
          </div>
        </form>
      )}

      {isFormSubmitted && (
        <Modal show={isFormSubmitted} onHide={onClosePopup} className="popup-modal" centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: '22px', paddingLeft: '35px', fontWeight: 'bold' }}>
              Result Sent Successfully
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={onClickBackToDashBoard}
              style={{ fontFamily: 'Times New Roman', marginTop: '60px' }}
            >
              Back to Dashboard
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Form;
