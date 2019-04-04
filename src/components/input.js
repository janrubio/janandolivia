import React from 'react'

const Input = (props) => {
	return (
		<div>
			<div>
				<label htmlFor="fullName">Guest Name</label>
				<input type="text" id="fullName" name="fullName" onChange={props.handleChange}/>
			</div>

			<fieldset>
				<legend>Which events will this guest be attending?</legend>
				<div>
					<input type="checkbox" id="attend-1" name="attendance" value="ceremony" onChange={props.handleChange} />
					<label htmlFor="attend-1">Ceremony + brunch reception</label>
					<div>11am at the <span>Queens Botanical Garden</span></div>
				</div>

				<div>
					<input type="checkbox" id="attend-2" name="attendance" value="banquet" onChange={props.handleChange} />
					<label htmlFor="attend-2">Banquet dinner</label>
					<div>6pm at the <span>Royal Queen</span></div>
				</div>
			</fieldset>

			<div>
				<label htmlFor="dietaryRestrictions">Any dietary restrictions?</label>
				<input type="text" id="dietaryRestrictions" name="dietaryRestrictions" onChange={props.handleChange}/>
			</div>

			<input type="button" value="Next" onClick={props.handleNext}/>
		</div>
	)
}

export default Input