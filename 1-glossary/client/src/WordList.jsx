import React from 'react';
class WordList extends React.Component {
constructor(props) {
  super(props);
  this.state = {}
}
//render current elements
render() {
  return(<div>
    {this.props.words.map(w => (
      <div className="glossaryEntry">{w.word} : {w.definition}
        <button> Edit </button> <button> Delete </button>
      </div>
    ))}
  </div>)
}
//function for edit click to call app function
handleEditClick() {

}
//function for delete click to call app function
handleDeleteClick() {

}
}
export default WordList;