import SearchByLanguage from "./SearchByLanguage";
import SearchByName from "./SearchByName";

const Search = (props) => {
  const handldeForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handldeForm}>
        <SearchByName name={props.name} handleFilter={props.handleFilter} />
        <SearchByLanguage handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Search;
