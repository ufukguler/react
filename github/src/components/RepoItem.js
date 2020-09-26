import React from "react";

const RepoItem = ({ id, url, name, description, onRepoSelect }) => {
  return (
    <div
      className="item"
      onClick={() => {
        onRepoSelect(name);
      }}
    >
      <i className="large github middle aligned icon"></i>
      <div className="content">
        <a className="header" href={url} key={id}>
          {name}
        </a>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
export default RepoItem;
