import React from 'react'

//takes person's info (obj - fullname, attending, diet) and displays it
const Guest = (props) => {
	return (
		<div>
			<p>{props.personInfo.fullName}</p>
			<p>{props.personInfo.dietaryRestrictions === '' ? 'No dietary restrictions' : props.personInfo.dietaryRestrictions}</p>
			<div>
				<span>{props.personInfo.attendingCeremony ? 'Yes - ' : 'No - '}</span>
				<span>Ceremony and brunch reception</span>
			</div>
			
			<div>
				<span>{props.personInfo.attendingBanquet ? 'Yes - ' : 'No - '}</span>
				<span>Banquet dinner</span>
			</div>
		</div>
	)
}

export default Guest