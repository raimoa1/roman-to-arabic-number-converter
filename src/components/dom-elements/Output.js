import React from 'react';
import '../scss/output.scss';
import P from './P';

const Output = (props) => {
    return (
      <output name={props.name}>
        <P content="Output:"/>
        <span className={props.classString}>{props.result}</span>
      </output>
    )
}

export default Output;