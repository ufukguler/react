import React from "react";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  const renderedRepos = repos.map((repo) => {
    return (
      <RepoItem
        key={repo.id}
        url={repo.html_url}
        name={repo.name}
        description={repo.description}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedRepos}</div>;
};
export default RepoList;
