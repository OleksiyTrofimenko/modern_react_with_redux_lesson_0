import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  // Solution agains errors 1 - Use bind(this)
  onFormSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;

    this.props.onSubmit(term);
  };

  // Solution agains errors 2 - Arrow functions
  // onFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

  // Solution agains errors 3 - pass arrow functions inside component
  // onSubmit={(e) => this.onFormSubmit(e)}
  // onChange={(e) => this.onInputChange(e)}

  render() {
    const { term } = this.state;
    
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">
              Image search
            </label>
            <div className="ui icon input">
              <input
                id="search"
                type="text"
                placeholder="Search..."
                value={term}
                onChange={(e) => this.onInputChange(e)}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;
