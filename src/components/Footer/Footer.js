import React from 'react';
import FooterContent from './FooterContent/FooterContent';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <FooterContent />
        <FooterContent />
        <FooterContent />
      </div>
    </footer>
  );
}

export default Footer;
