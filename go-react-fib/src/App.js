import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/App.css';
import 'normalize.css';

import Form from './components/Form';
import NumbersDisplay from './components/NumbersDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Fibonacci Sequence using Golang!</h1>
        </header>

          <Form />

          <div>
            <NumbersDisplay
              numbers={this.props.num}
            />
          </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  num: state.mainReducer.fibSequence
});

export default connect(mapStateToProps)(App);
