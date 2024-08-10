import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeReducer";

export const store = configureStore({
    reducer:{
        dishes : recipeReducer
    }
})