import React from 'react';
import '../Css/About.css';
import Logo from './Images/Logo.jpg';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src={Logo} alt="Company Logo" className="about-logo" />
        <h1>About Our Insurance Company</h1>
      </header>
      <section className="about-content">
        <h2>Our History</h2>
        <p>
          Founded in 1985, our insurance company has been committed to providing quality insurance services to our customers for over three decades. Our journey started with a small office and a big dream to make insurance accessible and understandable for everyone.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver reliable and affordable insurance solutions that give our customers peace of mind and financial security. We strive to build lasting relationships based on trust, integrity, and exceptional service.
        </p>
        
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards.</li>
          <li><strong>Customer Focus:</strong> We put our customers at the center of everything we do.</li>
          <li><strong>Innovation:</strong> We continuously seek new and better ways to serve our customers.</li>
          <li><strong>Excellence:</strong> We are committed to delivering superior service and value.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
