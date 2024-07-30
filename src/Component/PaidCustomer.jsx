import React, { useState, useEffect } from 'react';
import '../Css/PaidCustomer.css';

const PaidCustomers = () => {
    const [applications, setApplications] = useState([]);
    const [payments, setPayments] = useState([]);
    const [paidCustomers, setPaidCustomers] = useState([]);

    useEffect(() => {
        // Fetch applications data
        const fetchApplications = async () => {
            try {
                const response = await fetch('http://localhost:8000/applications');
                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        // Fetch payments data
        const fetchPayments = async () => {
            try {
                const response = await fetch('http://localhost:8000/payment');
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchApplications();
        fetchPayments();
    }, []);

    useEffect(() => {
        if (applications.length > 0 && payments.length > 0) {
            const paidCustomerNames = payments.map(payment => payment.name);
            const paidCustomers = applications.filter(application => 
                paidCustomerNames.includes(application.name)
            );
            setPaidCustomers(paidCustomers);
        }
    }, [applications, payments]);

    return (
        <div className="paid-customers-container">
            <h2>Paid Customers</h2>
            {paidCustomers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Insurance Type</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paidCustomers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No paid customers found.</p>
            )}
        </div>
    );
};

export default PaidCustomers;
