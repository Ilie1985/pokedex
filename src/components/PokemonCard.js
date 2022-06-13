// props for PokemonCard destructure pokemon and image as props
//destructure id and name from pokemon object
// set the sizing of the Grid item
//xs stands for extrasmall devices sm stans for small devices


import React from "react";
import { Grid } from "@material-ui/core";







const PokemonCard = (props) => {
  const { pokemon,image } = props;
  const {id,name}=pokemon
  return (
    <Grid item xs={12} sm={2}>

    </Grid>
  )
  
};

export default PokemonCard;
