import React, { Component } from 'react';

export default class myInput extends Component {
  state = {
    error: false,
  };
  render() {
    let em = /^[a-z0-9._]{3,}@[a-z]{2,5}.[a-z]{2,4}$/i;
    let n = /^09[0-9]{9}$/;
    var t;
    var text;
    var place;

    let type = this.props.type;
    if (type === 'email') {
      t = em;
      text = 'Email';
      place = 'email';
    } else {
      t = n;
      text = 'Number';
      place = 'mobile';
    }
    return (
      <div>
        <input
          placeholder={place}
          onBlur={(e) => {
            this.setState({
              error: !t.test(e.target.value),
            });
          }}
        />
        {this.state.error ? text : null}
      </div>
    );
  }
}
