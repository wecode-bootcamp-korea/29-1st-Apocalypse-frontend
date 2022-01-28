import React, { useState, useEffect } from 'react';

function CoditionComponont({ name, content }) {
  return (
    <div className="tncSpace">
      <span className="termsAndConditions">{name}</span>
      <div className="tncContent">{content}</div>
      <form className="agreeBox">
        <input
          className="radioCheckBox"
          type="radio"
          id="contactChoice1"
          name="contact"
          value="동의"
        />
        <label className="agree" for="contactChoice2">
          동의
        </label>
        <input
          className="radioCheckBox"
          type="radio"
          id="contactChoice2"
          name="contact"
          value="동의하지 않음"
        />
        <label for="contactChoice2">동의하지 않음</label>
      </form>
    </div>
  );
}

export default CoditionComponont;
