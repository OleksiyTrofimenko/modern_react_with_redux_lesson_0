import React from 'react';
import SeasonDisplay from './season-display';

class SeasonsApp extends React.Component {
  // When class is defined, constructor method initialy called to define initial data
  constructor(props) {
    // Is a reference for parent components
    super(props);

    // This is the only time when we do direct assignment
    this.state = {
      latitude: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setstate to update our data!
        this.setState({
          latitude: position.coords.latitude,
        });

        // Never do this update! It's calling MUTATE
        // this.state.latitude = position.coords.latitude;
      },
      (err) => {
        if (err) {
          this.setState({
            errorMessage: err.message,
          });
        }
      }, 
    );
  }
 
  // React says we have to define render!
  render() {
    const { latitude, errorMessage } = this.state;

    if (errorMessage && !latitude) {
      return (
        <div>Error: { errorMessage }</div>
      );
    }

    if (!errorMessage && latitude) {
      return (
        <div>Latitude: { latitude }</div>
      );
    }

    return (
      <div>Loading...</div>
    );
  }
};

export default SeasonsApp;
