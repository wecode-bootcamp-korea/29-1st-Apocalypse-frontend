import React from 'react';
import './Footer.scss';
import FooterContent from './FooterContent/FooterContent';

function Footer() {
  return (
    <div className="Footer">
      <div className="footerContent">
        <FooterContent />
        <FooterContent />
        <FooterContent />
      </div>
    </div>
  );
}

export default Footer;
