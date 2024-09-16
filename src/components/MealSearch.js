// src/components/MealSearch.js
import React, { useState } from "react";
import { fetchMeals } from "../api";
import MealCard from "./MealCard";

function MealSearch() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    const response = await fetchMeals(search);
    setMeals(response.data.meals);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="meal-list">
        {meals &&
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
}

export default MealSearch;
