import React from "react";
import { render } from "react-dom";
const axios = require('axios');
import WordList from './WordList.jsx'
import InputData from './InputData.jsx'
import Search from './Search.jsx'

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {words: []}
  // this.getWords = this.getWords.bind(this);
}

getWords() {
axios.get('/words').then((response) =>
{
  this.setState({words: response.data})
})
}
componentDidMount() {
  this.getWords();
}
inputWordSubmit(state) {
console.log('this is state: ', state);
let glossObj = { word: state.word, definition: state.definition };
axios.post('/words', glossObj)
.then(response => {
  // console.log(response);
})
.catch(error => {
  // console.log(error);
})
}
render() {
  return (<div>
    <h1>Glossary List</h1>
    <WordList words={this.state.words}/>
    <InputData inputSubmit={this.inputWordSubmit.bind(this)} />
    <Search />
  </div>)
  }
}
render(<App />, document.getElementById("app"));
