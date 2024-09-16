// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

export const fetchMeals = (mealName) => api.get(`search.php?s=${mealName}`);
