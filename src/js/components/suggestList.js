/**
 * SuggestionsList - Component used to render the suggestions data.
 * props{@suggestions} - suggestions props contain API response
 */

import React, { Component } from 'react';
import _ from 'lodash';

class SuggestionsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let suggestions = this.props.suggestions;
    console.log(this.props.suggestions);
    if( _.has(suggestions, "suggestionGroups") && suggestions.suggestionGroups.length > 0 && suggestions.suggestionGroups[0].searchSuggestions.length > 0) {
      const list = suggestions.suggestionGroups[0].searchSuggestions.map((item, i) => <li key={i} className="full-width">{item.displayText}</li>);
      return (
        <ul className="suggest-list clr">
          {list}
        </ul>
      );
    } else {
      return <div className="hidden"> </div>;
    };
  }
}


export default SuggestionsList;
