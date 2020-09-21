import React from 'react';
import { Button } from '../common/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>PROJECT MANAGEMENT</h1>
            <p>Get Started below!</p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    LEARN MORE <i className='fas fa-book'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;