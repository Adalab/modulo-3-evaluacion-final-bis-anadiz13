import React from "react";

const SearchByLanguage = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "language",
      value: ev.target.value,
    });
  };
  return (
    <>
      <section className="form__language">
        <label className="form__language--label" htmlFor="language">
          Filtra por lenguaje{" "}
        </label>
        <select
          className="form__language--select"
          name="language"
          id="language"
          onChange={handleChange}
        >
          <option className="form__language--option" value="ALL">
            TODOS
          </option>
          <option className="form__language--option" value="HTML">
            HTML
          </option>
          <option className="form__language--option" value="CSS">
            CSS
          </option>
          <option className="option__languages" value="JAVASCRIPT">
            JAVASCRIPT{" "}
          </option>
        </select>
      </section>
    </>
  );
};
export default SearchByLanguage;
