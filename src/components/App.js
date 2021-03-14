import React, { useEffect, useState } from "react";
import Search from "./Search";
import Header from "./Header";
import GetDataFromApi from "../services/GetDataFromApi";
import "../stylesheets/App.scss";
import RepoList from "./RepoList";
import Repo from "./Repo";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    GetDataFromApi().then((data) => setRepositories(data));
  }, []);
  const handleFilter = (changedInput) => {
    if (changedInput.key === "name") {
      setName(changedInput.value);
    } else if (changedInput.key === "language") {
      setLanguage(changedInput.value);
    }
  };
  const FilterRepositories = repositories
    .filter((repository) => {
      return repository.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((repository) => {
      return repository.language
        .toUpperCase()
        .includes(repository.toUpperCase());
    });
  const renderRepositoryDetail = (routerProps) => {
    const id = routerProps.match.params.repositoryId;
    const selectRepository = repositories.find((repository) => {
      return repository.id === parseInt(id);
    });
    if (selectRepository === undefined) {
      return <h2>Espera un momento</h2>;
    } else {
      return <Repo repository={selectRepository} />;
    }
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <article>
        <Switch>
          <Route exact path="/">
            <Search name={name} handleFilter={handleFilter} />
            <RepoList repositories={FilterRepositories} />
          </Route>
          <Route
            path="/repository/:repositoryId"
            render={renderRepositoryDetail}
          />
        </Switch>
      </article>
    </>
  );
};

export default App;
