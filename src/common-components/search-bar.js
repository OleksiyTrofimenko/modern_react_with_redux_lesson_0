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

  onFormSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;

    this.props.onSubmit(term);
  };

  render() {
    const { term } = this.state;
    const { searchType } = this.props;

    console.log(term);
    
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search"> 
              {searchType}
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

SearchBar.defaultProps = {
  searchType: '',
  onSubmit: () => {},
};
