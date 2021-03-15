import React from "react";

const RepoCard = (props) => {
  return (
    <>
      <h2 className="card__list"> {props.repo.name}</h2>
      {/* <a href="https://github.com/Adalab"></a> */}
      <p className="card__list--element-description">
        {props.repo.description}
      </p>
      <p className="card__list--element-language">{props.repo.language}</p>
    </>
  );
};
export default RepoCard;
