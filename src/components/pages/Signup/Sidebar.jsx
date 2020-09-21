import React from 'react';
import Logo from './code2.png';
import Input from '../../common/Input';

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
                <button className="signup-button">Sign Up</button>
            </form>
            <div className="lower">
                <div className="terms">
                    By signing up, I agree to the Privacy Policy <br /> and Terms of Service
                </div>
                <div className="signin">
                    <h4 className="signin-h4">Already have an account? <span className="signin-span">Sign In</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;