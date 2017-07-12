import React, { Component } from 'react';
import './App.css';

import YTsearch from 'youtube-api-search';
import SearchBar from './SearchBar';

const API_KEY = "AIzaSyAoJhRk7i8uKpToJtKD6NQ7T21AlR-iBNM";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    YTsearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({ videos });
      //same as videos: videos
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Redux Trainig</h2>
        <SearchBar />
      </div>
    );
  }
}

export default App;
