import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";

function Search() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3398852d61ec5408e0e2692ed3888b53&lang=tr`;

  const getWeatherData = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setDescription(response.data.weather[0].description);
        console.log(response.data);
        setTemp(Math.round(response.data.main.temp-273.15));
      });
    }
  };
  return (
    <div className="Search">
      <input
        className="Searchbar-input"
        type="text"
        placeholder="Search City.."
        value={location}
        onChange={(e) => {
          setLocation(e.target.value.trim());
        }}
        onKeyPress={getWeatherData}
      />
      <Card location={location}
        temp={temp}
        description={description}
      />
    </div>
  );
}

export default Search;
