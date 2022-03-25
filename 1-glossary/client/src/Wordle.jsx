import React from 'react';

class Wordle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: this.props.wordObj.word,
      definition: this.props.wordObj.definition
    }
  }
  render() {
    return(<div className="glossaryEntry">{this.props.wordObj.word} : {this.props.wordObj.definition}
    <button onClick={this.handleEditClick.bind(this)}> Edit </button>
    <button onClick={this.handleDeleteClick.bind(this)}> Delete </button>
  </div>)
  }
  //function for edit click to call app function
  handleEditClick() {

  let def = prompt('Please enter a new definition');
  this.props.editClick(def, this.state)
  }
  //function for delete click to call app function
  handleDeleteClick() {
  this.props.deleteClick(this.state);
  }
}
export default Wordle;