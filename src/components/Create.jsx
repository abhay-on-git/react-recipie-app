import React, { useContext, useState } from "react";
import { recipieContext } from "../utils/RecipieContext";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const Create = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const { dishes, setDishes } = useContext(recipieContext);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      title,
      image,
      description,
      ingredients,
      instructions,
      id: nanoid(),
    };
    console.log(recipe,'rrrrrrr')
    setDishes([...dishes, recipe]);
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
