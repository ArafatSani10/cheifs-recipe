import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {

    let [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('./chef.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
  console.log(recipes)

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {
            recipes.map(recipe => 
            <div key={recipe.recipe_id} className="card mt-10 bg-base-100  shadow-xl px-5">
                <figure>
                  <img
                    src={recipe.recipe_image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
           }

            </div>
        </div>
    );
};

export default Recipes;