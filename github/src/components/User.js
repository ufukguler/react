import React from "react";

const User = ({ data }) => {
  if (!data) {
    return <div></div>;
  }

  return (
    <div className="field">
      <div className="image">
        <img
          src={data.avatar_url}
          style={{ maxWidth: "280px", borderRadius: "50%" }}
        />
      </div>
      <div className="content">
        <div className="header">{data.name}</div>
        <div className="meta">
          <span className="floated">
            <a className="header" href={data.html_url}>
              @{data.login}
            </a>
          </span>
        </div>
        <div className="description">{data.bio}</div>
      </div>
      <div className="extra content">
        <i className="flag icon"></i>
        {data.location}
        <i className="user icon"></i>
        {data.followers} followers
        <i className="user icon"></i>
        {data.following} following
      </div>
    </div>
  );
};
export default User;
