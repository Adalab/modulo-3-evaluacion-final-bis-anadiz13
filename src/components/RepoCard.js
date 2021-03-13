import React from "react";

const RepoCard = (props) => {
  return (
    <>
      <h2 className="repo__title"> {props.repo.name}</h2>
      {/* <a href="https://github.com/Adalab"></a> */}
      <p className="repo__description">{props.repo.description}</p>
      <p className="repo__language">{props.repo.language}</p>
    </>
  );
};
export default RepoCard;
