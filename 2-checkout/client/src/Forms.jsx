import React from 'react';


class Forms extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    name: '',
    email: '',
    password: '',
    add1: '',
    add2: '',
    city: '',
    state: '',
    zip: null,
    creditCard: null,
    ccv: null,
    billingZip: null,
    formNum: 1

  }
}

onNextClick() {
  if ( this.state.formNum === 1) {
    this.state.name = document.getElementById('name').value;
    this.state.email = document.getElementById('email').value;
    this.state.password = document.getElementById('password').value;
    this.state.formNum ++;
  } else if ( this.state.formNum === 2) {
    this.state.add1 = document.getElementById('add1').value;
    this.state.add2 = document.getElementById('add2').value;
    this.state.city = document.getElementById('city').value;
    this.state.state = document.getElementById('st').value;
    this.state.zip = document.getElementById('zip').value;
    this.state.formNum ++;
  } else if ( this.state.formNum === 3) {
    this.state.creditCard = document.getElementById('cc').value;
    this.state.ccv = document.getElementById('exp').value;
    this.state.ccv = document.getElementById('ccv').value;
    this.state.billingZip= document.getElementById('bilZip').value;
    this.state.formNum = 1;
  }
}

render () {
  if ( this.state.formNum === 1){
    return(
    <div className="Form1">
      <h1> Form 1 </h1>
      <input id="name" type="text" placeholder="Name"></input>
      <input id="email" type="text" placeholder="Email"></input>
      <input id="password" type="text" placeholder="Password"></input>
      <button id="next1"> Next </button>
    </div>
    );
  }
  if (this.state.formNum === 2) {
    return (
      <div className="Form2">
      <h1> Form 2 </h1>
      <input id="add1" type="text" placeholder="Address Line 1"></input>
      <input id="add2" type="text" placeholder="Address Line 2"></input>
      <input id="city" type="text" placeholder="City"></input>
      <input id="st" type="text" placeholder="State"></input>
      <input id="zip" type="text" placeholder="Zip Code"></input>
      <button id="next2"> Next </button>
    </div>
    )
  }

  if ( this.state.formNum === 3) {
    return (
      <div className="Form3">
        <h1> Form 3 </h1>
        <input id="cc" type="text" placeholder="Credit Card"></input>
        <input id="exp" type="text" placeholder="Expiration"></input>
        <input id="ccv" type="text" placeholder="CCV"></input>
        <input id="bilZip" type="text" placeholder="Billing Zip"></input>
        <button id="next3"> Next </button>
      </div>
    )
  }
  }
}
export default Forms;