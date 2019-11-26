import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <div className="field">
          <label>Image Search</label>
          <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
