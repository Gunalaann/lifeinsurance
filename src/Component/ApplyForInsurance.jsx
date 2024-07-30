import React, { useState } from 'react';
import '../Css/ApplyForInsurance.css';

const ApplyForInsurance = ({ selectedInsurance }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, insuranceType: selectedInsurance }),
            });
            if (response.ok) {
                alert('Application submitted successfully');
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', address: '', dob: '' });
            } else {
                alert('Failed to submit application');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="apply-insurance-container">
            <h2>Apply for {selectedInsurance}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Insurance:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className="afibutton" type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyForInsurance;
