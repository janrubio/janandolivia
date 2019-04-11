import React from 'react';

const Guest = (props) => {
  return (
    <div className="guest">
      <div className="guest__heading">
        <span className="guest__title">{props.personInfo.fullName}</span>
        <button className="form-btn form-btn--edit" type="button" onClick={e => props.handleEdit(e, props.personInfo, props.guestNum)}>Edit</button>
      </div>
      <p className="guest__detail">{props.personInfo.dietaryRestrictions}</p>
      <div className="guest__attendance">
        <span className="guest__choice-icon">{props.personInfo.attendingCeremony ? 'Yes ' : 'No '}</span>
        <span className="guest__choice">{props.personInfo.attendingCeremony ? 'Attending ' : 'Not attending '}</span>
        <span className="guest__event">Ceremony & Brunch Reception</span>
      </div>

      <div className="guest__attendance">
        <span className="guest__choice-icon">{props.personInfo.attendingBanquet ? 'Yes ' : 'No '}</span>
        <span className="guest__choice">{props.personInfo.attendingBanquet ? 'Attending ' : 'Not attending '}</span>
        <span className="guest__event">Banquet Dinner</span>
      </div>
    </div>
  );
}

export default Guest;
