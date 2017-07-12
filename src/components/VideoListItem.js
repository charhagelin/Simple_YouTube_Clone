import React from 'react';
import './App.css';

const VideoListItem = ({video, title}) => {

  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video}  />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;


// const imageUrl = video.snippet.thumbnail.default.url
