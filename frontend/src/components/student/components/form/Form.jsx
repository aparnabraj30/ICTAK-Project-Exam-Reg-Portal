import './Form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function Form() {

  const navigate = useNavigate();
  const[isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    dob:'',
    batch: 'default',
    gender:''
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [isFormFade, setIsFormFade] = useState(false);

  const validateForm = () => {
    const errors = {};
  
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone No. is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone number should be 10 digits";
    }
  
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Invalid email format";
    }
  
    if (!formData.dob.trim()) {
      errors.dob = "Date of Birth is required";
    } else {
      const enteredDate = new Date(formData.dob.trim());
  
      if (isNaN(enteredDate.getDate()) || enteredDate > new Date()) {
        errors.dob = "Invalid date or date is in the future";
      }
    }
  
    if (formData.batch === 'default') {
      errors.batch = "Please select a batch";
    }

    if (!formData.gender) {
      errors.gender = "Choose a gender";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
};

  const onClickBackToDashBoard = () => {
    setIsFormSubmitted(false);
    navigate('/studentdashboard');
  }
  const onChangeHandler = (event) => {

    // console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
        try {
            const response = await axios.post("http://localhost:8000/api/students/register", {
              ...formData,
              batch: formData.batch,
          });

            console.log(response.data);

            setIsFormSubmitted(true);
            setIsFormFade(true);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    } else {
        console.log("Form validation failed");
    }
};
  const onClosePopup = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div className={`form ${isFormFade ? 'fade-out' : ''}`}>
    <div className="Form">
      {!isFormSubmitted && (
      <form onSubmit={onSubmitHandler}>
      <div className='form1'>
        <div className='heading'>
          <h1>Register For Your Exit Exam </h1>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className="form-control" name="name" onChange={onChangeHandler} value={formData.name} required disabled={isFormDisabled} />
          {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone No.</label>
          <input className="form-control" name="phone" onChange={onChangeHandler} value={formData.phone} required disabled={isFormDisabled} />
          {validationErrors.phone && <p className="error-message">{validationErrors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} required disabled={isFormDisabled} />
          {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name="dob" onChange={onChangeHandler} value={formData.dob} required disabled={isFormDisabled} />
          {validationErrors.dob && <p className="error-message">{validationErrors.dob}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="batch" className="form-label">Batch Name</label>
          <select className="form-select" name="batch" onChange={onChangeHandler} value={formData.batch} required disabled={isFormDisabled} >
            <option value="default" disabled>Select Batch</option>
            <option value="KKEM March CSA">KKEM March CSA</option>
            <option value="KKEM March DSA">KKEM March DSA</option>
            <option value="KKEM March MLAI">KKEM March MLAI</option>
            <option value="KKEM March FSD">KKEM March FSD</option>
            <option value="KKEM March ST">KKEM March ST</option>
          </select>
          {validationErrors.batch && <p className="error-message">{validationErrors.batch}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div className="gender-options">
            <div className="gender-option">
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={onChangeHandler}
              checked={formData.gender === 'male'}
              disabled={isFormDisabled} 
            />
            <label htmlFor="male">Male</label>
          </div>

          <div className="gender-option">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={onChangeHandler}
                checked={formData.gender === 'female'}
                disabled={isFormDisabled} 
              />
              <label htmlFor="female">Female</label>
            </div>

          <div className="gender-option">
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={onChangeHandler}
                checked={formData.gender === 'other'}
                disabled={isFormDisabled} 
              />
              <label htmlFor="other">Other</label>
            </div>
        </div>
        
        </div>  
        {validationErrors.gender && <p className="error-message">{validationErrors.gender}</p>}    
        <div className="form-group">
          <button className="btn" type="submit" style={{ fontFamily: 'Times New Roman' }} >Submit</button>
        </div>
        </div>
        
      </div>
      </form>
      )}

      {isFormSubmitted && (
              <Modal
                show={isFormSubmitted}
                onHide={onClosePopup}
                className="popup-modal"
                centered
              >
                {/* <Modal.Header closeButton> */}
                  <Modal.Title style={{ fontSize: '22px', paddingLeft: '30px', fontWeight: 'bold', marginTop: "5px" }}>Registered Successfully</Modal.Title>
                {/* </Modal.Header> */}
                <Modal.Body className="popup-content">
                  <p>All the best for your exam !!!</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={onClickBackToDashBoard} style={{ fontFamily: 'Times New Roman' }}>
                    Back to Dashboard
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
    </div>
    </div>
  );
}



export default Form;
