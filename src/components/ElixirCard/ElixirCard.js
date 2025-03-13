import React from "react";
import InfoField from "../common/InfoField";

const ElixirCard = ({ elixir }) => {
  const formatIngredients = (ingredients) => {
    return ingredients?.length > 0
      ? ingredients.map((ing) => ing.name).join(", ")
      : "N/A";
  };

  const formatInventors = (inventors) => {
    return inventors?.length > 0
      ? inventors
          .map((inv) => `${inv.firstName} ${inv.lastName}`.trim())
          .join(", ")
      : "N/A";
  };

  return (
    <div className="elixir-card">
      <h3>{elixir.name || "N/A"}</h3>
      <InfoField label="Difficulty" value={elixir.difficulty || "N/A"} />
      <InfoField label="Effect" value={elixir.effect || "N/A"} />
      <InfoField label="Side Effects" value={elixir.sideEffects || "N/A"} />
      <InfoField
        label="Characteristics"
        value={elixir.characteristics || "N/A"}
      />
      <InfoField label="Time" value={elixir.time || "N/A"} />
      <InfoField
        label="Ingredients"
        value={formatIngredients(elixir.ingredients)}
      />
      <InfoField label="Inventors" value={formatInventors(elixir.inventors)} />
      <InfoField label="Manufacturer" value={elixir.manufacturer || "N/A"} />
    </div>
  );
};

export default ElixirCard;
