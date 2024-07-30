// Navbar.jsx
import React, { useState } from 'react';
import '../Css/Home.css';
import { useNavigate } from 'react-router-dom';
import Logo from './Images/Logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import PeopleIcon from '@mui/icons-material/People';

const Navbar = () => {
    const navig = useNavigate();
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleMenuClick = (path) => {
        navig(path);
        setMenuVisible(false);
    };

    return (
        <div className="home-container">
            <nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    <MenuIcon /> {/* Vertical ellipsis character for three-dotted line */}
                </div>
                {isMenuVisible && (
                    <div className="dropdown-menu">
                        <div className="dashboard-header">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="menu-items">
                            <div className="menu-item" onClick={() => handleMenuClick('/types-of-insurance')}>
                                <HomeIcon style={{ marginRight: '10px' }} /> Types of Insurance
                            </div>
                            <div className="menu-item" onClick={() => handleMenuClick('/payment')}>
                                <PaymentIcon style={{ marginRight: '10px' }} /> Payment
                            </div>
                            <div className="menu-item" onClick={() => handleMenuClick('/returns')}>
                                <AssignmentReturnIcon style={{ marginRight: '10px' }} /> Returns
                            </div>
                            <div className="menu-item" onClick={() => handleMenuClick('/paidcustomers')}>
                                <PeopleIcon style={{ marginRight: '10px' }} /> Paid Customers
                            </div>
                        </div>
                    </div>
                )}
                <img src={Logo} alt='LIC' style={{ left: "60px", position: "absolute" }}></img>
                <h1>Life Insurance Policy</h1>
                <ul className="nav-links">
                    <li><span onClick={() => { navig('/home') }}>Home</span></li>
                    <li><span onClick={() => { navig('/login') }}>Login/Register</span></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;