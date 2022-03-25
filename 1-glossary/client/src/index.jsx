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
  // console.log(response.data);
  this.setState({words: response.data})
})
}

componentDidMount() {
  this.getWords();
}
//if word/definition submit is clicked
inputWordSubmit(state) {
let glossObj = { word: state.word, definition: state.definition };
axios.post('/words', glossObj)
.then(response => {
  this.getWords();
  // console.log(response);
})
.catch(error => {
  // console.log(error);
})
}

//if edit button is clicked on any definition
editClick(def, wordObj) {
  // console.log('this is the wordObj:', wordObj)
// console.log(def, wordObj.word, wordObj.definition);
let editWord = {word: wordObj.word, definition: def}
axios.post('/edit', editWord)
.then(response => {
  console.log(response);
  this.getWords();
})
.catch(error => {
  console.log(error);
})

}

deleteClick(state) {
  let deleteWord = {word: state.word, definition: state.definition}
  axios.delete('/delete', {data: {word: state.word, definition: state.definition}})
  .then(results => {
    this.getWords();
  })
  .catch(error => {
    console.log(error);
  })
}

searchClick(word) {
axios.get('/search', {params: word}).then((response) => {
  // console.log(response.data)
  this.setState({
    words: response.data
  })
  // this.getWords();
})
}


render() {
  return (<div>
    <h1>Glossary List</h1>
    <WordList words={this.state.words} editClick={this.editClick.bind(this)} deleteClick={this.deleteClick.bind(this)}/>
    <InputData inputSubmit={this.inputWordSubmit.bind(this)} />
    <Search searchClick={this.searchClick.bind(this)} />
  </div>)
  }
}
render(<App />, document.getElementById("app"));
