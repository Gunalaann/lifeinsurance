import React from 'react';
import '../Css/Contact.css';
import Logo from './Images/Logo.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <img src={Logo} alt="Company Logo" className="contact-logo" />
        <h1>Contact Us</h1>
      </header>
      <section className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          We're here to help. Reach out to us through any of the following methods:
        </p>
        <h3>Phone</h3>
        <p>1-800-123-4567</p>
        <h3>Email</h3>
        <p>support@insurancecompany.com</p>
        <h3>Office Address</h3>
        <p>1234 Insurance St., Suite 100, Insurance City, IN 12345</p>
        <h3>Business Hours</h3>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
      </section>
    </div>
  );
}

export default Contact;
