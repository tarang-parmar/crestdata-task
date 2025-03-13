import React from "react";
import ElixirCard from "../ElixirCard/ElixirCard";

const ElixirList = ({ elixirs }) => (
  <div className="elixir-list">
    {elixirs.map((elixir) => (
      <ElixirCard key={elixir.id} elixir={elixir} />
    ))}
  </div>
);

export default ElixirList;
