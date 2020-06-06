import React, { Component } from 'react';

export default class myBtn extends Component {
  render() {
    let title = this.props.title;

    let check = this.props.check != null ? this.props.check : false;
    return (
      <button onClick={this.props.onClick} disabled={check}>
        {title}
      </button>
    );
  }
}
