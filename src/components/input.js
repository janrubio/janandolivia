import React from 'react';

const Input = (props) => {
  return (
    <div className="form__controls">
      <div className="control__textbox-group">
        <label className="control__textbox-label" htmlFor="fullName">Guest Name</label>
        {/* className={props.error ? 'form__input-text is-error' : 'form__input-text'} */}
        <input className="control__textbox-input" type="text" id="fullName" name="fullName" onChange={props.handleChange} />
        {props.error && <p>You must fill out a name</p>}
      </div>

      <fieldset className="control__attendance-group">
        <legend className="control__attendance-caption">Which events will this guest be attending?</legend>

        <div className="control__checkbox-group">
          <input className="control__checkbox-input" type="checkbox" id="attend-1" name="attendance" value="attendingCeremony" onChange={props.handleChange} />
          <div className="control__checkbox-description">
            <label className="control__checkbox-label" htmlFor="attend-1">Ceremony + brunch reception</label>
            <p className="control__checkbox-caption">11am at the <span>Queens Botanical Garden</span></p>
          </div>
        </div>

        <div className="control__checkbox-group">
          <input className="control__checkbox-input" type="checkbox" id="attend-2" name="attendance" value="attendingBanquet" onChange={props.handleChange} />
            <div className="control__checkbox-description">
              <label className="control__checkbox-label" htmlFor="attend-2">Banquet dinner</label>
              <p className="control__checkbox-caption">6pm at the <span>Royal Queen</span></p>
            </div>
        </div>
      </fieldset>

      <div className="control__textbox-group">
        <label className="control__textbox-label" htmlFor="dietaryRestrictions">Any dietary restrictions?</label>
        <input className="control__textbox-input" type="text" id="dietaryRestrictions" name="dietaryRestrictions" onChange={props.handleChange} />
      </div>

      <input className="form-btn form-btn--fill" type="button" value="Next" onClick={props.handleNext} />
    </div>
  )
}

export default Input;
