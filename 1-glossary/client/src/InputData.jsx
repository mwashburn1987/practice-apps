import React from 'react'
class InputData extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    word: '',
    definition: ''
  }
  this.onWordChange = this.onWordChange.bind(this);
  this.onDefChange = this.onDefChange.bind(this);
}
handleClick() {
  this.props.inputSubmit(this.state);
}

onWordChange(e) {
  this.setState({
    word: e.target.value
  })
}
onDefChange(e) {
  this.setState({
    definition: e.target.value
  })
}
render() {
  return( <div>
  Word: <input onChange={this.onWordChange} id="wordField" type="text" placeholder="Type word here!" />
  Definition: <input onChange={this.onDefChange} id="defField" type="text" placeholder="Type definition here!"/>
  <button onClick={this.handleClick.bind(this)}> Submit </button>
</div>
)

  }
};
export default InputData;