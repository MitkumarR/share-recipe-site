import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  region: "",
  session: "",
  ingredients: [],
  type: "",
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
    addIngredient: (state, action) => {
      if (!state.ingredients.includes(action.payload)) {
        state.ingredients.push(action.payload);
      }
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(i => i !== action.payload);
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    clearAllFilters: (state) => {
      state.region = "";
      state.session = "";
      state.ingredients = [];
      state.type = "";
      state.category = "";
    },
  },
});

export const {
  setRegion, setSession, addIngredient, removeIngredient,
  setType, setCategory, clearAllFilters
} = filterSlice.actions;

export default filterSlice.reducer;
