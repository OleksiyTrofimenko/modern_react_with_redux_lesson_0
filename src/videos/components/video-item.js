import React from 'react';
import './video-item.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const { medium, title } = video.snippet.thumbnails;

  return (
    <div
     className="video-item item"
     onClick={() => onVideoSelect(video)}
    >
      <img
       className="ui image"
       src={medium.url}
       alt={title}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
