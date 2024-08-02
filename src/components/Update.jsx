import { useContext, useState, useEffect } from "react";
import { recipieContext } from "../utils/RecipieContext";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
    const { dishes, setDishes } = useContext(recipieContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const dish = dishes.find((dish) => dish.id === id);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        if (dish) {
            setTitle(dish.title);
            setImage(dish.image);
            setDescription(dish.description);
            setIngredients(dish.ingredients);
            setInstructions(dish.instructions);
        }
    }, [dish]);

    const updateHandler = (e) => {
        e.preventDefault();
        const updatedDish = {
            ...dish,
            title,
            image,
            description,
            ingredients,
            instructions
        };

        const updatedDishes = dishes.map(dish => dish.id === id ? updatedDish : dish);
        setDishes(updatedDishes);
        navigate('/recipes');
    }

    return (
        <form onSubmit={updateHandler} className="w-[70%] m-auto">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Ingredients -> 'use comma to separate ingredients'..."
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Instructions -> 'use comma to separate instructions'..."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Update;
