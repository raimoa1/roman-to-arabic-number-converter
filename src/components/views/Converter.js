import React, { Component, Fragment } from 'react';
import H1 from '../dom-elements/H1';
import Form from '../dom-elements/Form';

class Converter extends Component {
  render() {
    return (
      <Fragment>
        <H1 title="Insert Roman numbers and convert them to Arabic ones"/>
        <Form />
      </Fragment>
    )
  }
}

export default Converter;