import React from "react";

const SearchByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="label__ForName" htmlFor="name">
        Search
      </label>
      <input
        className="name"
        type="text"
        name="name"
        placeholder="Escribe un nombre"
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};
export default SearchByName;
