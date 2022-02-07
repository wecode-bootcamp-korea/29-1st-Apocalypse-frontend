import React from 'react';
import { Link } from 'react-router-dom';
import './FooterContent.scss';

function FooterContent({ footerContent }) {
  const { title, list1, list1_link, list2, list2_link, list3, list3_link } =
    footerContent;

  const dataTitle = { title };

  return (
    <div className="footerContent">
      <p className="footerContentTitle">{title}</p>
      {dataTitle === '소셜 네트워크' ? (
        <Link to={list1_link} className="footerContentItem">
          {list1}
        </Link>
      ) : (
        <>
          <a className="footerContentItem" href={list1_link}>
            {list1}
          </a>
          <a className="footerContentItem" href={list2_link}>
            {list2}
          </a>
          <a className="footerContentItem" href={list3_link}>
            {list3}
          </a>
        </>
      )}
    </div>
  );
}

export default FooterContent;
