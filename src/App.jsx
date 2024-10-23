import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sideber from "./Components/Sideber";


const App = () => {
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
      <Recipes></Recipes>

      {/* sideber */}
      <Sideber></Sideber>
     </section>
    </div>
  );
};

export default App;