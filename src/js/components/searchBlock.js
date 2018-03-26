import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './searchBar';
import SuggestionsList from './suggestList';
import { BING_API_URL, BING_APIKEY } from '../configObjAndKeys';

 class SearchBlock extends Component {
  constructor(props){
    super(props);
    this.state= {
      suggestions: null
    };
  }
  onSearchTermChange(term) {
    const url = `${BING_API_URL}${term}`,
      request = axios(url, {
        method: 'get',
        headers: {
          "Ocp-Apim-Subscription-Key": BING_APIKEY
        }
      }).then((response) => {
        this.setState({
          suggestions:response.data
        });
      }).catch((response) => {
        this.setState({
          suggestions:""
        });
      });
  }
  render() {
    const autoSuggest = _.debounce((term) => {this.onSearchTermChange(term)}, 1000);
    return (
      <div className="full-width gutter search-wrapper">
        <h2 className="block-title">The world's fastest-growing restaurant reservation platform</h2>
        <div className="search-block">
          <SearchBar onSearchTermChange={autoSuggest}/>
          <SuggestionsList suggestions={this.state.suggestions}/>
        </div>
      </div>
    );
  }
}

export default SearchBlock;
