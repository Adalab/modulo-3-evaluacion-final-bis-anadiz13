import React from "react";

const SearchByName = () => {
  return (
    <>
      <label className="label__ForName" htmlFor="name">
        Search
      </label>
      <input className="name" type="text" name="name" value="" />
    </>
  );
};
export default SearchByName;
