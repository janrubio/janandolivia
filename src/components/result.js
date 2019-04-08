import React from 'react';

const Result = (props) => {
  return (
    <div className="form__result">
      <p className="result__title">Thank you!</p>
      <p className="result__description">We've received your RSVP</p>
      <a className="result__link" href="/">
        <input className="form-btn" type="button" value="View wedding details" />
      </a>
    </div>
  )
}

export default Result;
