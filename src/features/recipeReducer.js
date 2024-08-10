import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: JSON.parse(localStorage.getItem("dishes")) || []
}

const recipeSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers:{
        update: (state, action) => {
            state.dishes = action.payload;
        },
    }
})

export const {update} = recipeSlice.actions;
export default recipeSlice.reducer