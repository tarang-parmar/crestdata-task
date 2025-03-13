import React from "react";

const FilterInput = ({ label, name, value, onChange }) => (
  <div className="filter-item">
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FilterInput;
