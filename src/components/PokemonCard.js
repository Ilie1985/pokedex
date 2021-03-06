// props for PokemonCard destructure pokemon and image as props
//destructure id and name from pokemon object
// set the sizing of the Grid item
//xs stands for extrasmall devices sm stans for small devices
//import Card from material-ui core,im going to place each element as a Card inside he Grid
//CardMedia gives back the image of the pokemon
//CardMedia has a image property to which i asign image p from props
//CardContent from material ui core is a wraper that holds Typography, to display the pokemons name -> pokemon.name
//name is destructured from pokemon right bellow the destructured props
//i need to style the component to show the image and for that i need to import makeStyles from material -ui core ,save it in a variable useStyles
//connect the className to the functional component with th help of useStyles function
//give id to each child in order to stop getting the error which says that every child in alist should have a unique id
//wrap Card in a Link element so that when clicked to take us to PokemonDetails
import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

//============================================================

//styling

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  card: {
    cursor: "pointer",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
  },
  name: {
    color: "#fff",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));
//===================================================================

const PokemonCard = (props) => {
  const classes = useStyles();
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} key={id}>
  
        <Link to={"/pokemon/" + id} className={classes.link}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={image}></CardMedia>
            <CardContent>
              <Typography className={classes.name}>{name}</Typography>
            </CardContent>
          </Card>
        </Link>
  
    </Grid>
  );
};

export default PokemonCard;
