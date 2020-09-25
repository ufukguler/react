import React from "react";

class SearchBar extends React.Component {
  state = { inputArea: "" };

  onInputChange = (event) => {
    this.setState({ inputArea: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.inputArea);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui input focus">
              <input
                placeholder="Github Username"
                type="text"
                value={this.state.inputArea}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
