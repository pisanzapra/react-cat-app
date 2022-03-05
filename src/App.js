import { useEffect, useState } from "react";

import Title from "./components/MainHeader/Title";
import Card from "./components/CurrentCat/Card";
import Reject from "./components/CurrentCat/Reject";
import Save from "./components/CurrentCat/Save";
import FavouritesHeader from "./components/Favourites/FavouritesHeader";
import FavouritesList from "./components/Favourites/FavouritesList";

import classes from "./App.module.css";

function App() {
  const [cat, setCat] = useState();
  const [faves, setFaves] = useState([]);

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

  const loadExistingFaves = () => {
    const retrievedData = localStorage.getItem("storedFaves");
    const favesLatest = JSON.parse(retrievedData);
    setFaves(favesLatest);
  };

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

  // This runs when the component loads
  useEffect(() => {
    fetchCat();
    loadExistingFaves();
  }, []);

  // This runs when 'faves' is changed
  useEffect(() => {
    saveToStorage(faves);
  }, [faves]);

  return (
    <main className={classes.app}>
      <Title />
      <Card cat={cat} />
      <Reject fetchCatHandler={fetchCat} />
      <Save cat={cat} faves={faves} addToFavesHandler={addToFaves} />
      <FavouritesHeader />
      <FavouritesList faves={faves} removeFave={removeFave} />
    </main>
  );
}

export default App;
