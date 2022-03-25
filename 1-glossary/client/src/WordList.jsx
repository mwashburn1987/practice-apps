import React from 'react';
import Wordle from './Wordle.jsx';

class WordList extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    word: '',
    definition: ''
  }
}
//render current elements
render() {
  return(<div>
    {this.props.words.map(w => (
    <Wordle wordObj={w} editClick={this.props.editClick} deleteClick={this.props.deleteClick} />
    ))}
  </div>)
}

}
export default WordList;