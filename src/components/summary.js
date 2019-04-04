import React from 'react'
import Guest from './guest'

const Summary = (props) => {
	return(
		<div>
			<Guest personInfo={props.leaderInfo}/>
			 
			{props.guestInfo.map(guest => {
				return <Guest 
						key={guest.id} 
						personInfo={guest} 
						/>
				})
			}
			
			<button onClick={props.handleAddGuest}>Add guest</button>
			<button type="submit" form="rsvp-form">Send RSVP</button>
		</div>
	)
}

export default Summary