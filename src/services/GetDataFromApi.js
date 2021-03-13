const GetDataFromApi = () => {
  return fetch("//api.github.com/orgs/Adalab/repos")
    .then((response) => response.json())
    .then((data) => {
      //results es el array que contiene a todos los respos
      return data.map((repository) => {
        return {
          id: repository.id,
          name: repository.name,
          description: repository.description,
          language: repository.languages_url,
        };
      });
    });
};
export default GetDataFromApi;
