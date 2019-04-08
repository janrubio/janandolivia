import React from 'react';
import Input from './input';
import Summary from './summary';
import Result from './result';

const uuid = require('uuid');

class FormContainer extends React.Component {
  state = {
    fullName: '',
    attendingCeremony: false,
    attendingBanquet: false,
    dietaryRestrictions: '',
    guestList: [],
    display: 'showForm',
    error: false,
  }

  /* Creates request to be sent to api */
  buildRequestBody = ({ guestList }) => {
    //Take out id of leader
    const [ { fullName, attendingCeremony, attendingBanquet, dietaryRestrictions }, ...guests ] = guestList;
    return { fullName, attendingCeremony, attendingBanquet, dietaryRestrictions, guests };
  }

  /* Creates guest to be added to guest list */
  buildGuest = ({ fullName, attendingCeremony, attendingBanquet, dietaryRestrictions }) => {
    if(dietaryRestrictions === '') {
      dietaryRestrictions = 'No dietary restrictions';
    }
    return { fullName, attendingCeremony, attendingBanquet, dietaryRestrictions, id: uuid.v1() };
  }

  /* Submits form to api */
  handleSubmit = async (e) =>{
    e.preventDefault();

    const requestBody = this.buildRequestBody(this.state);

    const response = await fetch('https://shptockpog.execute-api.us-east-1.amazonaws.com/dev/responses/accept', {
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'POST',
      'body': JSON.stringify(requestBody)
    });

    const data = await response.json();
    console.log(data);

    this.setState({
      display: 'showResult',
    })
  }

  /* Reset state for new guest */
  handleAddGuest = () => {
    this.setState({
      fullName: '',
      attendingCeremony: false,
      attendingBanquet: false,
      dietaryRestrictions: '',
      display: 'showForm',
    });
  }

  /* Validates fullName and puts guest in guest list*/
  handleNext = () => {
    const invalidName = this.state.fullName.trim() === '';
    this.setState({
      error: invalidName,
    })

    if(invalidName) { return; }
    else{
      const newGuest = this.buildGuest(this.state);
      this.setState(prevState => ({
        guestList: [...prevState.guestList, newGuest],
        display: 'showSummary',
      }));
    }
  }

  /* Tracks state of input */
  handleChange = (e) => {
    let name = '';

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
      });
    }
  }

  /* Renders component based on display state */
  renderComponents = () => {
    switch(this.state.display) {
      case 'showForm':
        return (
          <Input
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          error={this.state.error}
          />
        );
      case 'showSummary':
        return (
          <Summary
          guestInfo={this.state.guestList}
          handleAddGuest={this.handleAddGuest}
          />
        );
      case 'showResult':
        return (
          <Result />
        );
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className="form__header">
          <h2>RSVP</h2>
          <p>please confirm your plans to attend by May 20th</p>
        </div>
        <form className="form__body" onSubmit={this.handleSubmit}>
          { this.renderComponents() }
        </form>
      </div>
    );
  }
}

export default FormContainer;
