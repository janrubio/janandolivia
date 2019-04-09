import React from 'react';
import Guest from './guest';

const Summary = (props) => {
  return(
    <div className="form__guest-summary">
      {props.guestInfo.map(guest => {
        return <Guest
              key={guest.id}
              personInfo={guest}
              />
      })}

      {props.isSubmissionError && <p>There was an error. Please try submitting again.</p>}
      <input className="form-btn form-btn--fill" type="button" value="Add guest" onClick={props.handleAddGuest} />
      <input className="form-btn" type="submit" value="Send RSVP" />
    </div>
  );
}

export default Summary;
