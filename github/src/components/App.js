import React from "react";
import github from "../apis/github";
import SearchBar from "./SearchBar";
import RepoList from "./RepoList";
import User from "./User";

class App extends React.Component {
  state = { user: "", username: "", repoList: [], selectedRepo: "" };

  onSearchBarSubmit = async (inputArea) => {
    const response = await github.get(inputArea);
    const responseRepo = await github.get(`${inputArea}/repos`);

    this.setState({ user: response.data });
    this.setState({ repoList: responseRepo.data });
  };

  onRepoSelect = (selected) => {
    this.setState({ selectedRepo: selected });
    console.log(`tıklanan repo: ${selected}`);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchBarSubmit} />
        <div className="ui two column grid">
          <div className="ui row">
            <div className="column">
              <User data={this.state.user} />
            </div>
            <div className="column">
              <RepoList
                repos={this.state.repoList}
                onRepoSelect={this.onRepoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
