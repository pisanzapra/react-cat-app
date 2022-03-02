import { useEffect, useState } from "react";

const CatImage = (props) => {

  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetchCat();
  }, []);

  const apiKey = process.env.REACT_APP_API_KEY

  const fetchCat = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search",
      {
        method: "GET",
        headers: { "x-api-key": {apiKey} },
      },
      { params: { limit: 1, size: "full" } }
    );
    const data = await response.json();
    try {
        setCat(data[0].url)
    } catch (err) {
        console.log(err)
    }
  };


  return (
    <div>
      <h1><img src={cat} /></h1>
    </div>
  );
};

export default CatImage;
