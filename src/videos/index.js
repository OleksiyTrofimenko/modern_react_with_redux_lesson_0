import React from 'react';
import youtube from '../api/youtube';
import SearchBar from '../common-components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

class VideosApp extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.onTermSubmit = this.onTermSubmit.bind(this);
  }

  componentDidMount() {
    this.onTermSubmit('buildings');
  }
  
  onTermSubmit(term) {
    youtube.get('/search', {
      params: {
        q: term,
      },
    }).then(json => {
      const videos = json.data.items;

      this.setState({
        videos,
        selectedVideo: videos[0],
       });
    });
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          searchType="YouTube videos"
          onSubmit={this.onTermSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideosApp;
