import React, { useState, useEffect } from "react";
import ElixirList from "./components/ElixirList/ElixirList";
import FiltersSection from "./components/FiltersSection/FiltersSection";
import "./App.css";

const API_BASE_URL = "https://wizard-world-api.herokuapp.com/Elixirs";

function App() {
  const [elixirs, setElixirs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
    ingredient: "",
    inventorFullName: "",
    manufacturer: "",
  });

  useEffect(() => {
    fetchElixirs();
  }, [filters]);

  const fetchElixirs = async () => {
    try {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          queryParams.append(key, value);
        }
      });
      console.log(`💥 > fetchElixirs > queryParams--->`, queryParams);

      const response = await fetch(`${API_BASE_URL}?${queryParams.toString()}`);
      if (!response.ok) {
        console.log(`💥 > fetchElixirs > response--->`, response);
        throw new Error("Failed to fetch elixirs");
      }

      const data = await response.json();
      setElixirs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventorFullName: "",
      manufacturer: "",
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Harry Potter Wizard - Elixir List</h1>
      </header>

      <main className="container">
        <FiltersSection
          filters={filters}
          handleFilterChange={handleFilterChange}
          resetFilters={resetFilters}
        />

        {loading && <div className="loading">Loading elixirs...</div>}
        {error && <div className="error">{error}</div>}

        {!loading && !error && <ElixirList elixirs={elixirs} />}
      </main>
    </div>
  );
}

export default App;
