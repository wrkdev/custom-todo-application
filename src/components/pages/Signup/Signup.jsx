import React from 'react';
import './css/Signup.css';
import '../../../App.css';
import Sidebar from './Sidebar';

function Signup() {
    return (
        <div className='signup-container'>
            <div className="signup-wrapper">
                <Sidebar />
                <div className="home-container">
                    <h1 className="home-title">Join The <br /> Team</h1>
                </div>
            </div>
        </div>
    );
}

export default Signup;