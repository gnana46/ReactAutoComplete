import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import SearchBlock from './searchBlock';

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <SearchBlock />
        <Footer />
      </div>
    );
  }
}
