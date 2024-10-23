import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";


const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* ourRecipes */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;