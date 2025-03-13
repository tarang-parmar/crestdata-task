import React from "react";
import FilterInput from "../common/FilterInput";

const FiltersSection = ({ filters, handleFilterChange, resetFilters }) => {
  const filterFields = [
    { name: "name", label: "Name" },
    { name: "difficulty", label: "Difficulty" },
    { name: "ingredient", label: "Ingredient" },
    { name: "inventorFullName", label: "Inventor Full Name" },
    { name: "manufacturer", label: "Manufacturer" },
  ];

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-grid">
        {filterFields.map((field) => (
          <FilterInput
            key={field.name}
            label={field.label}
            name={field.name}
            value={filters[field.name]}
            onChange={handleFilterChange}
          />
        ))}
      </div>
      <button className="reset-button" onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default FiltersSection;
