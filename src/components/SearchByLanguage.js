import React from "react";

const SearchByLanguage = () => {
  return (
    <>
      <label className="label__languages" htmlFor="language"></label>
      <select name="language">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="Javascript">JAVASCRIPT</option>
      </select>
    </>
  );
};
export default SearchByLanguage;
