import React from 'react';
import { connect } from 'react-redux';
import { getFib } from '../actions/main';
import ValidForm from './ValidForm';

// import { addContact, setContacts, getContacts } from '../actions/mainActions';

export class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      formValid: true,
    }
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userInput);
    if (this.state.userInput >= 0) {
      this.setState({formValid: true})
      this.props.dispatch(getFib(this.state.userInput))
    } else {
      this.setState({formValid: false});
    }

    this.setState({ userInput: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          How many numbers in the Fibonacci sequence would you like to see? <br></br>
          <ValidForm formErrors={this.state.formValid} />
          <input
            type="number"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </label>
        <br></br>
        <button type="submit">
          generate sequence
        </button>
      </form>
    );
  }
}

export default connect()(Form);