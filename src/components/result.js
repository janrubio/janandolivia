import React from 'react';
import FormFooter from './form-footer';

const Result = (props) => {
  return (
    <div className="form__body">

      <div className="form__result">
        <span className="result__emoji">🎉</span>
        <p className="result__title">We've received your RSVP for</p>
        <ul className="result__guest-list">
          {props.guestInfo.map(guest => {
            return <li className="result__guest-item" key={guest.id}>{guest.fullName}</li>
          })}
        </ul>
      </div>

      <FormFooter
      renderFooter={props.renderFooter}
      />
    </div>
  )
}

export default Result;
