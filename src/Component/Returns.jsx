import React from 'react';
import '../Css/Returns.css';

const Returns = () => {
    return (
        <div className="returns-container">
            <h1>Returns Policy</h1>
            <p>
                Our returns policy ensures that you can confidently engage with our services. Please read through
                our terms and conditions to understand our refund process.
            </p>
            <ol>
                <li>Request a return within 30 days of service.</li>
                <li>Provide necessary documentation.</li>
                <li>Receive confirmation and refund within 14 days.</li>
            </ol>
        </div>
    );
}

export default Returns;
