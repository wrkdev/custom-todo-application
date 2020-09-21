import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Stay notified with blog updates below.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Projects</Link>
                        <Link to='/'>Designs</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>How it works</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Projects</Link>
                        <Link to='/'>Designs</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>How it works</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Projects</Link>
                        <Link to='/'>Designs</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>How it works</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            WC&D <i className="fas fa-code"></i>
                        </Link>
                    </div>
                    <small className="website-rights">WC&D © 2020</small>
                    <div className="social-icons">
                        <a
                            className="social-icon-link twitter"
                            href='https://twitter.com/wrkdev'
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a 
                            className="social-icon-link github"
                            href='https://github.com/wrkdev'
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;