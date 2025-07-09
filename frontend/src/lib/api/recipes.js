import axios from "axios";

const BASE_URL = "http://localhost:8000/api/recipes/recipes/";

export async function fetchRecipes() {
  const res = await axios.get(BASE_URL);
  return res.data;
}

export async function searchRecipes(searchTerm) {
  const res = await axios.get(BASE_URL, {
    params: { search: searchTerm },
  });
  return res.data;
}

export async function filterRecipes(filters) {
  const params = {};

  if (!filters || Object.keys(filters).length === 0) {
    return fetchRecipes();
  }
  if (filters.region) params.region = filters.region;
  if (filters.session) params.session = filters.session;
  if (filters.type) params.type = filters.type;
  if (filters.category) params.category = filters.category;
  if (Array.isArray(filters.ingredients) && filters.ingredients.length > 0) {
    params.ingredients = filters.ingredients.join(",");
  }

  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
