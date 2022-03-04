import { useEffect, useState } from "react";

import CatImage from "./components/CurrentCat/CatImage";
import MainHeader from "./components/MainHeader/MainHeader";
import Actions from "./components/CurrentCat/Actions";
import FavouritesHeader from "./components/Favourites/FavouritesHeader";
import FavouritedCat from "./components/Favourites/FavouritedCat";

import background from "./imgs/bg-tile2.jpg";

function App() {
  const [cat, setCat] = useState();
  const [faves, setFaves] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const loadExistingFaves = () => {
    const retrievedData = localStorage.getItem("storedFaves");
    const favesLatest = JSON.parse(retrievedData);
    setFaves(favesLatest);
  };

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

  // This runs when the component loads
  useEffect(() => {
    fetchCat();
    loadExistingFaves();
  }, []);

  // This runs when 'faves' is changed
  useEffect(() => {
    saveToStorage(faves);
  }, [faves]);

  const addToFaves = (cat) => {
    setFaves([...faves, cat]);
    fetchCat();
  };

  const saveToStorage = (newFaves) => {
    localStorage.setItem("storedFaves", JSON.stringify(newFaves));
  };

  const removeFave = (removeMe) => {
    setFaves(faves.filter((f) => f !== removeMe));
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <MainHeader />
      <CatImage cat={cat} />
      <Actions
        cat={cat}
        faves={faves}
        fetchCatHandler={fetchCat}
        addToFavesHandler={addToFaves}
      />
      <FavouritesHeader />

      {faves.map(function (fave, faveIndex) {
        return (
          <div key={faveIndex}>
            <img src={fave} width="100" height="100" />
            <button onClick={() => removeFave(fave)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
