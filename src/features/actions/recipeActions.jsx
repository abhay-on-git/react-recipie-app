import { update } from "../recipeReducer";
export { update } 

export const getRecipesFromApi = () => async (dispatch,getState)=>{
    try {
        getState(); // stores the current state
        const dishes = JSON.parse(localStorage.getItem("dishes")) || [];
        console.log(dishes,'gggggggggg')
        dispatch(update(dishes));
    } catch (error) {
        console.log(error);
    }
}