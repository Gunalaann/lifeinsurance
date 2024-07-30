import React, { useState } from 'react';
import '../Css/Payment.css';

const Payment = ({ applicantName, onPaymentSuccess }) => {
    const [paymentData, setPaymentData] = useState({
        name: applicantName || '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            });
            if (response.ok) {
                alert('Payment successful');
                onPaymentSuccess();
            } else {
                alert('Payment failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="payment-portal-container">
            <h2>Payment for {applicantName}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={paymentData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Card Number:
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Expiry Date:
                    <input
                        type="text"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                    />
                </label>
                <label>
                    CVV:
                    <input
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className="payment-button" type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Payment;
