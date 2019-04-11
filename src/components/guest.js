import React from 'react';

const Guest = (props) => {
  return (
    <div className="guest">
      <p className="guest__title">{props.personInfo.fullName}</p>
      <p className="guest__detail">{props.personInfo.dietaryRestrictions}</p>
      <div className="guest__attendance">
        <span className="guest__choice-icon">{props.personInfo.attendingCeremony ? 'Yes ' : 'No '}</span>
        <span className="guest__choice">{props.personInfo.attendingCeremony ? 'Attending ' : 'Not attending '}</span>
        <span className="guest__event">Ceremony & Brunch Reception</span>
      </div>

      <div className="guest__attendance">
        <span className="guest__choice-img">{props.personInfo.attendingBanquet ? 'Yes ' : 'No '}</span>
        <span className="guest__choice">{props.personInfo.attendingBanquet ? 'Attending ' : 'Not attending '}</span>
        <span className="guest__event">Banquet Dinner</span>
      </div>
    </div>
  );
}

export default Guest;
