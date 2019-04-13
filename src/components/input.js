import React from 'react';
import FormFooter from './form-footer';

const Input = (props) => {
  return (
    <div className="form__body">

      <div className="form__controls">
        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="fullName">
            {props.guestNum === 0 ? "Guest Name" : `Guest ${props.guestNum}'s name`}
          </label>
          <input className="control__textbox-input" type="text" id="fullName" name="fullName" value={props.guestNameValue} onChange={props.handleChange} />
          {props.isInvalidName && <p className="is-error">Guest name is required.</p>}
        </div>

        <fieldset className="control__checkbox-fieldset">
          <legend className="control__checkbox-legend">Which events will this guest be attending?</legend>

          <div className="control__checkbox-group">
            <input className="control__checkbox-input" type="checkbox" id="attend-1" name="attendingCeremony" defaultChecked={props.attendingCeremonyValue} onChange={props.handleChange} />
            <label className="control__checkbox-description" htmlFor="attend-1">
              <span className="control__checkbox-label">Ceremony & Brunch Reception</span>
              <br/>
              <span className="control__checkbox-caption">11am, Queens Botanical Garden</span>
            </label>
          </div>

          <div className="control__checkbox-group">
            <input className="control__checkbox-input" type="checkbox" id="attend-2" name="attendingBanquet" defaultChecked={props.attendingBanquetValue} onChange={props.handleChange} />
              <label className="control__checkbox-description" htmlFor="attend-2">
                <span className="control__checkbox-label">Banquet Dinner</span>
                <br/>
                <span className="control__checkbox-caption">6pm, Royal Queen</span>
              </label>
          </div>
        </fieldset>

        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="dietaryRestrictions">Any dietary restrictions?</label>
          <label className="control__textbox-caption" htmlFor="dietaryRestrictions">For example: vegetarian, seafood allergy, etc.</label>
          <input className="control__textbox-input" type="text" id="dietaryRestrictions" name="dietaryRestrictions" value={props.dietaryRestrictionsValue} onChange={props.handleChange} />
        </div>
      </div>

      <FormFooter
      renderFooter={props.renderFooter}
      />
    </div>
  )
}

export default Input;
