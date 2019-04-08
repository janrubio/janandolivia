import React from 'react';

const Guest = (props) => {
  return (
    <div className="guest">
      <p className="guest__title">{props.personInfo.fullName}</p>
      <p className="guest__detail">{props.personInfo.dietaryRestrictions}</p>
      <div className="guest__attendance">
        <span className="guest__choice">{props.personInfo.attendingCeremony ? 'Yes - ' : 'No - '}</span>
        <span className="guest__event">Ceremony and brunch reception</span>
      </div>

      <div className="guest__attendance">
        <span className="guest__choice">{props.personInfo.attendingBanquet ? 'Yes - ' : 'No - '}</span>
        <span className="guest__event">Banquet dinner</span>
      </div>
    </div>
  );
}

export default Guest;
