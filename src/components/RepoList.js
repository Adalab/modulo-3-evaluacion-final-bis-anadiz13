import React from "react";
import RepoCard from "./RepoCard";
const RepoList = (props) => {
  const repoElement = props.repositories.map((repo) => {
    console.log(repo);
    return (
      <li className="list__card" key={repo.id}>
        <RepoCard repo={repo} />
      </li>
    );
  });
  return (
    <section>
      <ul className="list__list">{repoElement}</ul>
    </section>
  );
};

export default RepoList;
