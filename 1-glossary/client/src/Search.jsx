import React from 'react';

class Search extends React.Component {
constructor(props) {
  super(props);
  this.state = {}
}
render() {
  return( <div>
    Search: <input className="searchInputBar" placeholder="Search for word here!"></input>
    <button> Search </button>
  </div>)
}
}
export default Search;