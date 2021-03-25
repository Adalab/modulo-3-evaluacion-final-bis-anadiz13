import React from "react";
import RepoCard from "./RepoCard";
const RepoList = (props) => {
  const repoElement = props.repositories.map((repo) => {
    console.log(repo);
    return (
      <li key={repo.id}>
        {" "}
        {/* class list__card */}
        <RepoCard repo={repo} />
      </li>
    );
  });
  return (
    <section>
      <ul className="list__list">{repoElement}</ul>
      {/*}- class list: padding-left: 50px; list-style: disc;    display: grid;
    grid-template-columns: 1fr 1fr 1fr; */}
    </section>
  );
};

export default RepoList;
