import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    setSubmitStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-description">
          I'm always open to discussing new testing projects, QA opportunities, or ways to improve software quality.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info">
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info">
                <h3>Location</h3>
                <p>Your City, Country</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="info">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {submitStatus && <div className="submit-status">{submitStatus}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 