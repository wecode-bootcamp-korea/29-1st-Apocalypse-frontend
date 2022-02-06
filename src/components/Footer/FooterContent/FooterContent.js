import React from 'react';
import './FooterContent.scss';

function FooterContent({ footerContent }) {
  const { title, list1, list1_link, list2, list2_link, list3, list3_link } =
    footerContent;

  return (
    <div className="footerContent">
      <p className="footerContentTitle">{title}</p>
      <a className="footerContentItem" href={list1_link}>
        {list1}
      </a>
      <a className="footerContentItem" href={list2_link}>
        {list2}
      </a>
      <a className="footerContentItem" href={list3_link}>
        {list3}
      </a>
    </div>
  );
}

export default FooterContent;
