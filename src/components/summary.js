import React from 'react';
import Guest from './guest';
import FormFooter from './form-footer';
import LoadingIcon from './loading-icon';

const Summary = (props) => {
  return(
    <div className="form__body">

      <div className="form__guest-summary">
        {props.guestInfo.map((guest, i) => {
          return <Guest
                key={guest.id}
                personInfo={guest}
                handleEdit={props.handleEdit}
                guestNum={i+1}
                />
        })}

        <button className="form-btn form-btn--white" type="button" onClick={props.handleAddGuest}>Add another guest</button>
        {props.isSubmissionError && <p className="is-error">There was an error. Please try submitting again.</p>}
      </div>

      <FormFooter
      renderFooter={props.renderFooter}
      />
    </div>
  );
}

export default Summary;
