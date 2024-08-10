import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesFromApi } from "../features/actions/recipeActions";

const Create = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();
  const {dishes} = useSelector((state)=>state.dishes)
  const dispatch = useDispatch();
  console.log(dishes)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      image,
      description,
      ingredients,
      instructions,
      id: nanoid(),
    };
    localStorage.setItem('dishes',JSON.stringify([...dishes,newRecipe]))
    dispatch(getRecipesFromApi())
    navigate('/recipes');
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-[70%] m-auto">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Create <br /> New Recipe
      </h1>
      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Image URL"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Description..."
      ></textarea>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Ingredients -> 'use comma to separate ingredients'..."
      ></textarea>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Instructions -> 'use comma to separate instructions'..."
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
