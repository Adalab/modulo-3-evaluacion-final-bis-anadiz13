import React from "react";

const RepoCard = (props) => {
  return (
    <>
      <h2 className="list__card--title">
        {/* class list__card--title */}
        <a href="">{props.repo.name}</a>
      </h2>
      {/* <a href="https://github.com/Adalab"></a> */}
      <p className="list__card--descrip">
        {" "}
        {/* class list__card--descrip */}
        {props.repo.description}
      </p>
      <p className="list__card--language">
        {/* class list__card--language */}
        <ul className="list__card--listLang">
          {/* class list__card--listLang */}
          <li className="list__card--listLangElements">
            {props.repo.language}
          </li>
        </ul>
      </p>
    </>
  );
};
export default RepoCard;
