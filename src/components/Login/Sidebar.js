import React from 'react';
import Logo from "../../assets/images/wrkdev.jpg";
import './css/Sidebar.css';
import Input from '../common/Input';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo-wrapper">
                <img className="logo" src={Logo} alt="Logo" />
                <h3 className="logo-h3">Wrkdev <span className="logo-span">Coding</span></h3>
            </div>
            <form className="signup-form">
                <h3>Sign Up</h3>
                <Input id="name" placeholder="Name" />
                <Input id="email" placeholder="Email" type="email" />
                <Input id="pwd" placeholder="Password" type="password" />
                <Input id="confirm" placeholder="Confirm Password" type="password" />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default Sidebar;