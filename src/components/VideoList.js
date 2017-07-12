import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  console.log(props)

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video.snippet.thumbnails.default.url} title={video.snippet.title} />
  });

  return(
    <div className="col-md-4 list-goup">
      {videoItems}
    </div>
  )
}

export default VideoList;
