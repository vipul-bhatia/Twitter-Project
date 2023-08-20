import React, { useState, useRef } from 'react';
import './FormStyles.css';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const formRef = useRef(null); // ref for the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/save_contact_data/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        formRef.current.reset(); // reset form after successful submission
      } else {
        const errorData = await response.json();
        setMessage(errorData.detail || "There was an error submitting the form."); // You can display server-side errors if any
      }

    } catch (error) {
      setMessage("There was an error submitting the form.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='form'>
      {isLoading && <div>Loading...</div>}
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Your Name: </label>
        <input name="name" type='text'></input>
        <label>Your Email: </label>
        <input name="email" type='text'></input>
        <label>Your Subject: </label>
        <input name="subject" type='text'></input>
        <label>Your Message: </label>
        <textarea name="message" rows='6' placeholder='Type Your Message Here'/>
        <button className='btn' type='submit'>Submit</button>
      </form>
      {message && <div className='message'>{message}</div>}
    </div>
  )
}
