import React from "react";

const RepoCard = (props) => {
  return (
    <>
      <h2 className="card__list">
        {/* class list__card--title */}
        <a href="">{props.repo.name}</a>
      </h2>
      {/* <a href="https://github.com/Adalab"></a> */}
      <p className="card__list--element-description">
        {" "}
        {/* class list__card--descrp */}
        {props.repo.description}
      </p>
      <p className="card__list--element-language">
        {" "}
        {/* class list__card--language */}
        <ul>
          {" "}
          {/* class list__card--listLang */}
          <li>{props.repo.language}</li>
        </ul>
      </p>
    </>
  );
};
export default RepoCard;
