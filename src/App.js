import React from 'react'
import Login from './Component/Login.jsx'
import Home from './Component/Home.jsx'
import Register from './Component/Register.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './Component/About.jsx'
import Service from './Component/Service.jsx'
import Contact from './Component/Contact.jsx'
import Returns from './Component/Returns.jsx';
import TypesOfInsurance from './Component/TypesOfInsurance.jsx';
import Payment from './Component/Payment.jsx';
import Navbar from './Component/Navbar.jsx'
import ApplyForInsurance from './Component/ApplyForInsurance.jsx';
import PaidCustomers from './Component/PaidCustomer.jsx';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/login' exact element={<Login/>}></Route>
        <Route path='/Home' exact element={<Home/>}></Route>
        <Route path='/register' exact element={<Register/>}></Route>
        <Route path='/about' exact element={<About/>}></Route>
        <Route path='/contact' exact element={<Contact/>}></Route>
        <Route path='/service' exact element={<Service/>}></Route>
        <Route path='/returns' exact element={<Returns/>}></Route>
        <Route path='/types-of-insurance' exact element={<TypesOfInsurance/>}></Route>
        <Route path='/payment' exact element={<Payment/>}></Route>
        <Route path='/applyforinsurance' exact element={<ApplyForInsurance/>}></Route>
        <Route path='/paidcustomers' exact element={<PaidCustomers/>}></Route>
       </Routes>
    </div>
    
  );
}

export default App;
