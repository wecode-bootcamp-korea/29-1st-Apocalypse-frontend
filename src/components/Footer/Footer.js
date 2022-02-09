import React from 'react';
<<<<<<< HEAD

function Footer() {
  return <div />;
=======
import FooterContent from './FooterContent/FooterContent';
import FOOTER_DATA from './footerData';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContentList">
        {FOOTER_DATA.map((footerContent, idx) => {
          return <FooterContent key={idx} footerContent={footerContent} />;
        })}
      </div>
    </footer>
  );
>>>>>>> master
}

export default Footer;
