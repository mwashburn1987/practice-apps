import React from 'react';

class Search extends React.Component {
constructor(props) {
  super(props);
  this.state = {word: ''}
}
onSearchChange(e) {
  this.setState({
    word: e.target.value
  })
}
searchClickHandler() {
this.props.searchClick(this.state);
}
render() {
  return( <div>
    Search: <input onChange={this.onSearchChange.bind(this)} className="searchInputBar" placeholder="Search for word here!"></input>
    <button onClick={this.searchClickHandler.bind(this)}> Search </button>
  </div>)
}
}
export default Search;