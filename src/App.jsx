import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sideber from "./Components/Sideber";


const App = () => {

  let[recipeQueue, setRecipeQueue] = useState([]);


  

  const addRecipeToQueue = (recipe) =>{
    
  const isExist = recipeQueue.find(previousRecipe =>previousRecipe.recipe_id === recipe.recipe_id )
     if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
     }

     else{
      alert('Recipe already  exist in the queue')
     }
  }
  console.log(recipeQueue)
  return (
    <div className="container mx-auto px-4">
      {/* header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* ourRecipes */}
      <OurRecipes></OurRecipes>

     <section className="flex flex-col md:flex-row gap-6">
      {/* card section */}
      <Recipes addRecipeToQueue = {addRecipeToQueue}></Recipes>

      {/* sideber */}
      <Sideber recipeQueue={recipeQueue}></Sideber>
     </section>
    </div>
  );
};

export default App;