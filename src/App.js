import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mainstore from './stores/mainstore';
import increaseCounter from './actions/increaseCounter';
import { connect } from 'react-redux'
import store from './store/mainstore';

window.store =store

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { counter: state.count };
};
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: data => {
      dispatch(increaseCounter(data));
    }
  };
};

let connectComponentToExport = connect( mapStateToProps, mapDispatchToProps )(App);

export default App;
