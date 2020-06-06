import React from 'react';
import './App.css';
import MyInput from './components/myInput';
import MyBtn from './components/myBtn';
import { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 0,
  };
  onClickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <MyInput type='email' />
        <MyInput type='number' />
        <MyBtn onClick={this.onClickHandler} title='enroll' />
        <MyBtn title='enter' />
        {this.state.counter}
      </div>
    );
  }
}
