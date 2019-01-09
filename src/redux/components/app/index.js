import React from 'react';
import SongList from '../song-list/song-list';
import SongDetail from '../song-detail/song-detail';

const ReduxApp = () => {
  return (
    <div className="ui container grid" style={{ marginTop: '10px' }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default ReduxApp;
