import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        countryCode: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use your Email.js service details
        const serviceId = 'your_service_id';
        const templateId = 'your_template_id';
        const userId = 'your_user_id';

        // Send email using Email.js
        emailjs.send(serviceId, templateId, formData, userId)
            .then((response) => {
                console.log('Email sent successfully:', response);
                // Handle success (e.g., show a success message)
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Handle error (e.g., show an error message)
            })
            .finally(() => {
                // Close the form after submission
                onClose();
            });
    };

    return (
        <Overlay>
            <FormWrapper>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <FormHeader>To engage with us, please fill in your details</FormHeader>
                <form onSubmit={handleSubmit}>
                    {/* Your form fields here */}
                    <FormField>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" onChange={handleChange} />
                    </FormField>

                    <FormField>
                        <label htmlFor="countryCode">Country Code</label>
                        <input type="text" id="countryCode" name="countryCode" onChange={handleChange} />
                        {/* Add logic to display flag based on the entered country code */}
                    </FormField>

                    <FormField>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" onChange={handleChange} />
                    </FormField>

                    <FormField>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={handleChange} />
                    </FormField>

                    <CenteredSubmitButton type="submit">Submit</CenteredSubmitButton>
                </form>
            </FormWrapper>
        </Overlay>
    );
};


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; 
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100; 
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const FormHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const CenteredSubmitButton = styled.button`
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #7065f0;
  padding: 15px 30px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: block;
  margin: 0 auto;
`;

export default ContactForm;
