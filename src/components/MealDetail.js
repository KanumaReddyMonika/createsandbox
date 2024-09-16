// src/components/MealDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMeals } from "../api";

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const getMealDetail = async () => {
      const response = await fetchMeals("");
      const mealDetail = response.data.meals.find((m) => m.idMeal === id);
      setMeal(mealDetail);
    };
    getMealDetail();
  }, [id]);

  return (
    <div>
      {meal && (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>Ingredients</h3>
          <ul>
            {Object.keys(meal)
              .filter((key) => key.startsWith("strIngredient") && meal[key])
              .map((key, index) => (
                <li key={index}>
                  {meal[key]} - {meal[`strMeasure${index + 1}`]}
                </li>
              ))}
          </ul>
          <h3>Instructions</h3>
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default MealDetail;
