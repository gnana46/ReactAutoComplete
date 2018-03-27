/**
 * SearchBar Component contains inputbox and button
 * props {@onSearchTermChange()} pass input to the props function
 * function: handleInputChange - used to pass the input text to the props onSearchTermChange()
 */

import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (<div className="search-bar">
      <input type="text" value={this.state.term} className="search-input" onChange={event => this.handleInputChange(event.target.value)}/>
      <button className="btn-find">Find</button>
    </div>);
  }
}

export default SearchBar;
