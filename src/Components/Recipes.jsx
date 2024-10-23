import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {

    let [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./chef.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    console.log(recipes)

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {
                    recipes.map(recipe =>
                        <div key={recipe.recipe_id} className="card mt-10 bg-base-100 shadow-xl  border-2 px-5">
                            <figure>
                                <img className="rounded-xl"
                                    src={recipe.recipe_image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-gray-800 font-bold"> {recipe.recipe_name}</h2>
                                <p className="text-base text-gray-600">{recipe.short_description}</p>
                                <h3 className=" text-lg text-gray-800 font-bold">ingredients: {recipe.ingredients.length}</h3>
                                <ul className="ml-8">
                                    {
                                        recipe.ingredients.map((item, index) => <li className="list-disc" key={index}>{item}</li>)
                                    }
                                </ul>

                                <div className="flex gap-4 ">
                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-clock mr-2 text-2xl"></i>
                                        <p>{recipe.preparing_time} minute</p>
                                    </div>

                                    {/* arekta copy */}
                                    <div className="flex items-center gap-2">
                                        <i className="fa-sharp fa-solid fa-fire mr-2 text-2xl"></i>
                                        <p>{recipe.calories} calore</p>
                                    </div>
                                </div>
                                <div className="card-actions ">
                                    <button className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-bold">Want To Cook</button>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Recipes;