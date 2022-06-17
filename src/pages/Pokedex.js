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
//import Grid from material ui and replace pokemonData.map  in the ternary operator that returns the pokemons name in an <h1>.
//So now the ternary operator will b like so: if we have pokemonData then return Grid ,else give me CircularProgress from material ui/core
//the container property of Grid component gives a style to each element,without the containe property each element will take the entire space of the screen
//spacing gives some space in between the elements from Grid components
//inside Grid component return pokemos name /pokemon.name
//implement makeStyles to style components/object of styles

import React from "react";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config/config";
import { IMAGE_API_URL } from "../config/config";
import { Grid } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: "center",
    padding: "70px 10px 0 10px",
    backgroundColor: "rgb(68, 68, 68)",
  },
}));

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const classes = useStyles();
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
        <Grid className={classes.grid} container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
};

export default Pokedex;
