import React from 'react';
import './Footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h2>Contact Us</h2>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <PhoneIcon />
              <span>041 87 16 13</span>
            </div>
            <div className="footer__contact-item">
              <EmailIcon />
              <span>benimcakesandcoffee@gmail.com</span>
            </div>
            <div className="footer__contact-item">
              <LocationOnIcon />
              <span>Oran, Algeria, +213</span>
            </div>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__follow-us">
            <h2>Follow Us</h2>
            <div className="footer__social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/cafebenim" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </div>
          </div>
         
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Coffee Cake. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
