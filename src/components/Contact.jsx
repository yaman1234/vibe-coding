import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import '../styles/common.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("55r2-jf832WWwqujH");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const templateParams = {
        to_email: 'yamanmaharjan00@gmail.com',
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message
      };

      const result = await emailjs.send(
        "service_71bki47",
        "template_pbzayse",
        templateParams
      );

      console.log('EmailJS response:', result);

      if (result.text === 'OK') {
        setSubmitStatus('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Detailed error sending email:', error);
      setSubmitStatus(`Failed to send message: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section section-container">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
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
                <p>yamanmaharjan00@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info">
                <h3>Location</h3>
                <p>Thecho, Godawari, Lalitpur</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="info">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/yaman-maharjan/" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
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
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.includes('Failed') ? 'error' : 'success'}`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 