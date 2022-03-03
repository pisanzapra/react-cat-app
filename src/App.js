import { useEffect, useState } from "react";

import CatImage from "./components/CurrentCat/CatImage";
import MainHeader from "./components/MainHeader/MainHeader";
import Actions from "./components/CurrentCat/Actions";
import FavouritesHeader from "./components/Favourites/FavouritesHeader";
import FavouritedCat from "./components/Favourites/FavouritedCat";

function App() {
  const [cat, setCat] = useState();

  const [faves, setFaves] = useState([]);

  useEffect(() => {
    fetchCat();
  }, []);

  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchCat = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search",
      {
        method: "GET",
        headers: { "x-api-key": { apiKey } },
      },
      { params: { limit: 1, size: "full" } }
    );
    const data = await response.json();
    try {
      setCat(data[0].url);
    } catch (err) {
      console.log(err);
    }
  };

  const addToFaves = (cat) => {
    setFaves([...faves, cat]);
  };

  const favesStrings = faves.map((i) => i.cat);

  localStorage.setItem("storedFaves", JSON.stringify(favesStrings));

  const retrievedData = localStorage.getItem("storedFaves");

  const favesLatest = JSON.parse(retrievedData);

  return (
    <div>
      <MainHeader />
      <CatImage cat={cat} />
      <Actions
        cat={cat}
        faves={faves}
        fetchCatHandler={fetchCat}
        addToFavesHandler={addToFaves}
      />
      <FavouritesHeader />

      {favesStrings.map(function (faveString, faveStringIndex) {
        return (
          <img
            src={faveString}
            key={faveStringIndex}
            width="100"
            height="100"
          />
        );
      })}
    </div>
  );
}

export default App;
