import React, { Component } from 'react';
import './App.css';

import YTsearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoListItem from './VideoListItem';

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
      <div className="container">
        <h2 className="heading">Redux Trainig</h2>
        <SearchBar />
        <VideoList
          videos={this.state.videos}
        />
        <VideoListItem />
      </div>
    );
  }
}

export default App;
