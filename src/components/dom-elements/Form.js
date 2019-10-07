import React, { Component } from 'react';
import Output from './Output';
import Label from './Label';


class Form extends Component {
 constructor(props) {
   super(props);

   this.state = ({
     value : '',
     newValue : '',
     isResultFalse : false
   })
 }

  getArabicNumbers = () => {
    let arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    return arabicNumbers;
  }

  getRomanNumerals = () => {
    let romanNumerals = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    return romanNumerals;
  }

 handleChange = (e) => {
   this.setState({
     value : e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.convertInput();
 }

 convertInput = () => {
  let romanNumerals = this.getRomanNumerals();
  let arabicNumbers = this.getArabicNumbers();
  let input = '';
  // credit : https://xprimiendo.com/en/roman-numerals-in-javascript/
  let checkRomans =  /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  let output = 0;

  if (this.state.value) {
    input = this.state.value;
  }
  
  if (input.match(checkRomans)) {
    for (var i = 0; i <= arabicNumbers.length;i++) {
      while (input.indexOf(romanNumerals[i]) === 0) {
        output += arabicNumbers[i];
        input = input.replace(romanNumerals[i], '');
      }
    }

    this.setState({
      isResultFalse : false,
      newValue : output
    })
  }
  
  else {
    output = 'Please enter a valid roman numeral and check your input!'
    this.setState({
      isResultFalse : true,
      newValue : output
    })
  }
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label label="Insert a roman numeral:"/>
        <input className="input-field" type="text" label="Enter a roman numeral" value={this.state.value} onChange={this.handleChange}/>
        <input className="button" type="submit" value="Submit"/>
        {(this.state.isResultFalse) ? <Output name="result" classString="output-field-catch" result={this.state.newValue} /> : <Output name="result-ok" classString="output-field-ok" result={this.state.newValue}/> }
      </form>
    )
  }
}

export default Form;