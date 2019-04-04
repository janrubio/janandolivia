import React from "react"
import Input from './input'
import Summary from './summary'
import Result from './result'

const uuid = require('uuid')

class FormContainer extends React.Component {
	state = {
		fullName: '',
		attendingCeremony: false,
		attendingBanquet: false,
		dietaryRestrictions: '',
		guests: [],
		display: 'showForm',
		isAddGuest: false,
		numGuests: 0
	}

	/* Creates request to be sent to api*/
	buildRequestObj = ({ fullName, attendingCeremony, attendingBanquet, dietaryRestrictions, guests }) => {
		return ({ fullName, attendingCeremony, attendingBanquet, dietaryRestrictions, guests })
	}

	/* Creates leader info to be rendered in summary */
	buildLeaderInfo = ({ fullName, attendingCeremony, attendingBanquet, dietaryRestrictions }) => {
		return ({ fullName, attendingCeremony, attendingBanquet, dietaryRestrictions })
	}

	/* Creates an empty guest to be added to guest list */
	buildNewGuest = () => {
		return {
			id: uuid.v1(),
			fullName: '',
			attendingCeremony: false,
			attendingBanquet: false,
			dietaryRestrictions: '',
		}
	}

	/* Submits form to api */
	handleSubmit = async (e) =>{
		e.preventDefault()

		const request = this.buildRequestObj(this.state)

		const res = await fetch('https://shptockpog.execute-api.us-east-1.amazonaws.com/dev/responses/accept', {
			'headers': {
				'Content-Type': 'application/json'
			},
			'method': 'POST',
			'body': JSON.stringify(request)
		})

		const data = await res.json()
		console.log(data)

		this.changeDisplay('showResult')
	}

	/* Prepares addition of new guest */
	handleAddGuest = () => {
		const newGuest = this.buildNewGuest()
		this.setState(prevState => ({
			isAddGuest: true,
			numGuests: prevState.numGuests + 1,
			guests: [...prevState.guests, newGuest]
		}))

		this.changeDisplay('showForm')
	}

	/* Shows summary page */
	handleNext = () => {
		this.changeDisplay('showSummary')
	}

	/* Tracks state of input for leader */
	handleChange = (e) => {
		if(this.state.isAddGuest === false) {
			let name = ''

			if(e.target.type === 'checkbox') {
				name = e.target.value
				this.setState(prevState => ({
					[name]: !prevState[name],
				}));
			}
			else {
				name = e.target.name
				this.setState({
					[name]: e.target.value
				})
			}
		}
		else {
			this.handleChangeGuest(e.target)
		}
	}

	/* Tracks state of input for guests */
	handleChangeGuest = (target) => {
		const indexOfCurrentGuest = this.state.numGuests-1
		let name = ''

		if(target.type === 'checkbox') {
			name = target.value
			this.setState(prevState => ({
				guests: [
					...prevState.guests.slice(0, indexOfCurrentGuest),
					{
						...prevState.guests[indexOfCurrentGuest],
						[name]: !prevState.guests[indexOfCurrentGuest][name],
					}
				]
			}))
		}
		else {
			name = target.name
			this.setState(prevState => ({
				guests: [
					...prevState.guests.slice(0, indexOfCurrentGuest),
					{
						...prevState.guests[indexOfCurrentGuest],
						[name]: target.value,
					}
				]
			}))
		}
	}

	/* Toggles display of components */
	changeDisplay = (displayState) => {
		this.setState({
			display: displayState
		})
	}

	/* Renders component based on display state */
	renderComponents = () => {
		if(this.state.display === 'showForm') {
			return (
				<Input 
				handleChange={this.handleChange} 
				handleSubmit={this.handleSubmit} 
				handleNext={this.handleNext}
				/>
			)
		}
		if(this.state.display === 'showSummary') {
			const leaderInfo = this.buildLeaderInfo(this.state)
			return (
				<Summary 
				leaderInfo={leaderInfo}
				guestInfo={this.state.guests}
				handleAddGuest={this.handleAddGuest}
				/>
			)
		}
		if(this.state.display === 'showResult') {
			return (
				<Result 
				/>
			)
		}
	}

	render() {
		return (
			<div>
				<h2>RSVP</h2>
				<p>please confirm your plans to attend by May 20th</p>
				<form id="rsvp-form" onSubmit={this.handleSubmit}>
					{ this.renderComponents() }
				</form>
			</div>
		)
	}
}

export default FormContainer
