//this will be the main page ,home page
//import Box from material ui core
//inside Box get the data from pokemon api
//check if the pokemon data exists
//create a container and map over pokemon data and show polemon cards
//import useEffect using object destructuring hook to get data from api
//useeffect is similar to componentDidMount()
//install axios and import it to use it for the api fetching
//check if the status of our response is succesful with an if statement
//do object destructuring to get what i need from the data object
//create newPokemonData array set it to an empty array
// loop through the array with forEach method
//for each iteration we will get back the pokemon and its index
//create a json pokemonObject
//increse the index to get the next pokemon with index++
//push the pokemonObject that we just created in pokemonData
//inside Box componenet check if pokemonData has a truthy value
//in return JSX have a ternary operator if we have pokemonData then map over it and give me pokemons name in an <h1> ,else give me CircularProgress from material ui/core
//set the useState to null so that we can check if it has been initialised or not because an empty array count as a truthy value

import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config/config";
import { IMAGE_API_URL } from "../config/config";

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${POKEMON_API_URL}?limit=800 `);
      // const data = res.data;
      // console.log(data.results);
      if (res.status >= 200 && res.status < 300) {
        const { results } = res.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: `${IMAGE_API_URL}` + index + ".png",
            name: pokemon.name,
          };
          // console.log(pokemonObject);
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    };
    getData();
  }, []);

  return (
    <Box>
      {pokemonData ? (
        pokemonData.map((pokemon) => {
          return <h1>{pokemon.name} </h1>;
        })
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
};

export default Pokedex;
