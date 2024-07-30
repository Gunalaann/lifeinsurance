import React from 'react';
import '../Css/Service.css';
import Logo from './Images/Logo.jpg';

const Service = () => {
  return (
    <div className="service-container">
      <header className="service-header">
        <img src={Logo} alt="Company Logo" className="service-logo" />
        <h1>Our Services</h1>
      </header>
      <section className="service-content">
        <h2>What We Offer</h2>
        <p>
          Our insurance company provides a wide range of services to meet your insurance needs. Here are some of the key services we offer:
        </p>
        <h3>Life Insurance</h3>
        <p>
          Protect your loved ones with our comprehensive life insurance policies. We offer term life, whole life, and universal life insurance options.
        </p>
        <h3>Health Insurance</h3>
        <p>
          Ensure your health and well-being with our health insurance plans. We cover a wide range of medical expenses, from routine check-ups to major surgeries.
        </p>
        <h3>Auto Insurance</h3>
        <p>
          Keep your vehicle and yourself safe with our auto insurance policies. We provide coverage for accidents, theft, and other unforeseen events.
        </p>
        <h3>Home Insurance</h3>
        <p>
          Protect your home and belongings with our home insurance plans. We offer coverage for natural disasters, theft, and other damages.
        </p>
        <h3>Business Insurance</h3>
        <p>
          Secure your business with our customized insurance solutions. We provide coverage for liability, property, and employee benefits.
        </p>
      </section>
    </div>
  );
}

export default Service;
