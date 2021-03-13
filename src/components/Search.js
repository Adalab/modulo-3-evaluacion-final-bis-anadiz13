import SearchByLanguage from "./SearchByLanguage";
import SearchByName from "./SearchByName";

const Search = () => {
  return (
    <section>
      <form className="">
        <SearchByName />
        <SearchByLanguage />
      </form>
    </section>
  );
};

export default Search;
