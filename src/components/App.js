import React, { useEffect, useState } from "react";
import Search from "./Search";
import Header from "./Header";
import GetDataFromApi from "../services/GetDataFromApi";
import "../stylesheets/App.scss";
import RepoList from "./RepoList";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    GetDataFromApi().then((data) => setRepositories(data));
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Search />
      </div>
      <article>
        <RepoList repositories={repositories} />
      </article>
    </>
  );
};

export default App;
