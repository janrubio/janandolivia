import React from 'react';
import FormFooter from './form-footer';

const Input = (props) => {
  return (
    <div className="form__body">

      <div className="form__controls">
        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="fullName">Guest Name</label>
          <input className="control__textbox-input" type="text" id="fullName" name="fullName" onChange={props.handleChange} />
          {props.isInvalidName && <p className="is-error">Guest name is required.</p>}
        </div>

        <fieldset className="control__checkbox-fieldset">
          <legend className="control__checkbox-legend">Which events will this guest be attending?</legend>

          <div className="control__checkbox-group">
            <input className="control__checkbox-input" type="checkbox" id="attend-1" name="attendance" value="attendingCeremony" onChange={props.handleChange} />
            <div className="control__checkbox-description">
              <label className="control__checkbox-label" htmlFor="attend-1">Ceremony & Brunch Reception</label>
              <p className="control__checkbox-caption">11am, Queens Botanical Garden</p>
            </div>
          </div>

          <div className="control__checkbox-group">
            <input className="control__checkbox-input" type="checkbox" id="attend-2" name="attendance" value="attendingBanquet" onChange={props.handleChange} />
              <div className="control__checkbox-description">
                <label className="control__checkbox-label" htmlFor="attend-2">Banquet Dinner</label>
                <p className="control__checkbox-caption">6pm, Royal Queen</p>
              </div>
          </div>
        </fieldset>

        <div className="control__textbox-group">
          <label className="control__textbox-label" htmlFor="dietaryRestrictions">Any dietary restrictions?</label>
          <label className="control__textbox-caption" htmlFor="dietaryRestrictions">For example: vegetarian, seafood allergy, etc.</label>
          <input className="control__textbox-input" type="text" id="dietaryRestrictions" name="dietaryRestrictions" onChange={props.handleChange} />
        </div>
      </div>

      <FormFooter
      renderFooter={props.renderFooter}
      />
    </div>
  )
}

export default Input;
