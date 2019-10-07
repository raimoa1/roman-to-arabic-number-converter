import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input type={this.props.type} label={this.props.label} name={this.props.name} value={this.props.value} />
    )
  }
}

export default Input;