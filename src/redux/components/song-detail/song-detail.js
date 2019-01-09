import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => (
  <div>
    <h3>Song details:</h3>
    {
      !song ? (
        <div>Please select a song</div>
      ) : (
        <div>
          <div>{song.title}</div>
          <div>{song.duration}</div>
        </div>
      )
    }
  </div>
);

const mapStateToProps = (state) => ({
  song: state.selectedSong,
});

export default connect(mapStateToProps, null)(SongDetail);
