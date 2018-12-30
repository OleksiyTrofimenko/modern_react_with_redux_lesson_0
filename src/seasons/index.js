import React from 'react';
import SeasonDisplay from './season-display';
import Spinner from './spinner';

class SeasonsApp extends React.Component {
  // // When class is defined, constructor method initialy called to define initial data
  // constructor(props) {
  //   // Is a reference for parent components
  //   super(props);

  //   // This is the only time when we do direct assignment
  //   this.state = {
  //     latitude: null,
  //     errorMessage: '',
  //   };
  // }

  // This is the same result as we use this.state in constructor method.
  state = {
    latitude: null,
    errorMessage: '',
  };

  componentDidMount() {
    console.log('I am mounted once');

    window.navigator.geolocation.getCurrentPosition(
        // We called setstate to update our data!
        (position) => this.setState({ latitude: position.coords.latitude }),
        // Never do this update! It's calling MUTATE
        // this.state.latitude = position.coords.latitude;
        (err) => this.setState({ errorMessage: err.message }),
    );

    // console.log(window.navigator.geolocation.getCurrentPosition());

    console.log(this.state);
  }

  componentDidUpdate() {
    console.log('I am mounted several times');
    console.log(this.state);
  }

  renderContent() {
    const { latitude, errorMessage } = this.state;

    if (errorMessage && !latitude) {
      return (
        <div>Error: { errorMessage }</div>
      );
    }

    if (!errorMessage && latitude) {
      return (
        <SeasonDisplay latitude={latitude} />
      );
    }

    return (
      <Spinner message="Please accept location request" />
    );
  }
 
  // React says we have to define render!
  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div> 
    );
  }
};

export default SeasonsApp;
