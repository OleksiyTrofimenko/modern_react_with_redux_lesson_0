import React from 'react';
import unsplash from '../../api/unsplash';
// import SearchBar from './search-bar';
import SearchBar from '../../common-components/search-bar';
import ImageList from './image-list';

class App extends React.Component {
  state = {
    images: [],
  };

  // onSearchSubmit(value) {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: {
  //       query: value,
  //     },
  //     headers: {
  //       Authorization: 'Client-ID df6d6058fc02b45a52f8c17c4cb96af69341ababb45f77c78329da674b0f1fc3',
  //     },
  //   }).then(response => {
  //     console.log(response.data.results);
  //   });
  // }

  onSearchSubmit= async value => {
    // async - need some time for receiving result, define function as asynchronius
    const response = await unsplash.get('/search/photos', {
      // await - assign result to variable, that allow us to manipulate later 
      params: {
        query: value,
      },
    });

    this.setState({
      images: response.data.results,
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          searchType="Search images"
        />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
