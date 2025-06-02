import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_wulijue',       // Replace with your actual EmailJS service ID
      'template_bhoagof',      // Replace with your actual EmailJS template ID
      templateParams,
      'C9pqjgsrCsEbFZtGQ'        // Replace with your actual EmailJS public key
    )
    .then(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setFormStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again later.' });
      console.error('EmailJS Error:', error.text);
    });
  };

  return (
    <section id={id} className="section contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'm open to job opportunities and collaborations. Feel free to reach out!</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-type">ashutosh.patil1409@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-type">+91 91307 47809</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-type">Chembur, Mumbai</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/AshutoshPatil14" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ashutosh-patil-556518191" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="btn primary-btn"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus.submitted && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error">
                {formStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
