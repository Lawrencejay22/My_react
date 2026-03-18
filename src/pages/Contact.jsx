import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [popup, setPopup] = useState({ show: false, message: '', isError: false });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      showPopup('Please fill in all fields!', true);
      return;
    }

    // Open email client with form data
    window.location.href = `mailto:gabionzalawrencejay@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    // Show confirmation popup
    showPopup('Your message has been sent successfully!', false);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const showPopup = (message, isError = false) => {
    setPopup({ show: true, message, isError });
    setTimeout(() => {
      setPopup({ show: false, message: '', isError: false });
    }, 3000);
  };

  return (
    <>
      <Header />

      <section className="contact-section">
        <h1>Contact Me</h1>
        <p>I'd love to hear from you! Fill out the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* Popup Message */}
      {popup.show && (
        <div className={`popup-message show ${popup.isError ? 'error' : ''}`}>
          {popup.message}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Contact;