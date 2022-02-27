import CatImage from "./components/CurrentCat/CatImage";
import MainHeader from "./components/MainHeader/MainHeader";
import Actions from "./components/CurrentCat/Actions";
import FavouritesHeader from "./components/Favourites/FavouritesHeader";
import FavouritedCat from "./components/Favourites/FavouritedCat";

function App() {
  return (
    <div><MainHeader />
    <CatImage />
    <Actions />
    <FavouritesHeader />
    <FavouritedCat />
    <FavouritedCat />
    <FavouritedCat />
    <FavouritedCat />
    <FavouritedCat />
    </div>
  );
}

export default App;
