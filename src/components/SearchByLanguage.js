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
      <label className="label__languages" htmlFor="language"></label>
      <select name="language" id="language" onChange={handleChange}>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="Javascript">JAVASCRIPT </option>
      </select>
    </>
  );
};
export default SearchByLanguage;
