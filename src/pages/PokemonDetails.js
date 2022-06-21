//this page will show the details of the pokemon
// I`m going to use a class component and its going to be conencted to redux
//connect the component to router
//implement the state for this class component
//create a constructor that takes in props
//pass the props to super Component which is the class that extends
//implement the state with only one property-> pokemon
//use componentdidMount to fetch data for class components
//import axios to help with the catching of the data
//get the id from the parameters
//match has the parameter
//get match from this.props
//get pokemon id from match parameters
//using ? to make sure that match exists
//use axios to get the pokemon details using the id of the pokemon
// import POKEMON_API_URL from config
//append the route and the pokemon id
//.then gives the promise
//check the response status to see if its succesfull
//grab the pokemon from states using object destructuring
//get pokemon details inside the if statement using object destructuring
//import Box element from material ui core
//implement styles for Box element using withStyles function  form material ui core
//withStyles takes in styles
//connect withStyles function to PokemonDetails class component ,this will pass the styles as props
//withStyles takes in styles and give it to our class component using props
//have a title as pokemons name using Typography from material ui core
//variant h1 will give the look of a h1 tag to Typography
//inside Typography destructure name /pokemons name
// show the image of the pokemon inside Box
//implement the specifications of the pokemon, under the img create a new Box element from material ui
//implement Grid with the specification of the pokemon, pass in container property
//the m next to height stands for meters

import React, { Component } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config/config";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  withStyles,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from 'react-redux'
//====================================================================
const styles = (theme) => ({
  title: {
    textTransform: "upperCase",
    fontFamily: "Fantasy",
    fontSize: "40px",
  },

  pokemon: {
    height: "86.5vh",
    backgroundColor: "#000",
    color: "#fff",
    marginTop: "75px",
    borderRadius: "5px",
    textAlign: "center",
    paddingTop: "30px",
  },

  pokemonImage: {
    width: "300px",
    height: "300px",
    backgroundColor: "#fff",
  },

  pokemonInfo: {
    position: "absolute",
    bottom: "60px",
    width: "98.7%",
    height: "200px",
  },

  separataor: {
    height: "0.01mm",
    width: "95%",
  },

  favouriteBtn: {
    height: "50px",
    width: "50px",
    marginTop: "15px",
  },

  name: {
    fontSize: "20px",
    position: "absolute",
    left: "20%",
    top: "20%",
  },

  height: {
    fontSize: "20px",
    position: "absolute",
    left: "40%",
    top: "20%",
  },

  weight: {
    fontSize: "20px",
    position: "absolute",
    left: "60%",
    top: "20%",
  },

  baseExperience: {
    fontSize: "20px",
    position: "absolute",
    left: "80%",
    top: "20%",
  },
});

//=================================================================

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(POKEMON_API_URL + "/" + id).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        // console.log("response.data ", res.data);
        this.setState({ pokemon: res.data });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { pokemon } = this.state;
    // console.log("pokemon log", pokemon);

    if (pokemon) {
      const { name, sprites, height, weight, base_experience } = pokemon;
      // console.log(sprites);
      console.log("pokemon log", pokemon);
      return (
        <Box>
          <Box className={classes.pokemon}>
            <Typography className={classes.title} variant="h1">
              {name}
            </Typography>
            <img
              className={classes.pokemonImage}
              src={sprites.front_default}
              alt=""
            />
            <Box className={classes.pokemonInfo}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={1}>
                  <Button className={classes.favouriteBtn}>
                    <FavoriteIcon
                      style={{ color: "#fff", fontSize: "40px" }}
                    ></FavoriteIcon>
                  </Button>
                  <Grid item md={2}>
                    <Typography className={classes.name}>
                      Name :
                      <br />
                      {name}
                    </Typography>
                  </Grid>

                  <Grid item md={2}>
                    <Typography className={classes.height}>
                      Height :
                      <br />
                      {height}m
                    </Typography>
                  </Grid>

                  <Grid item md={2}>
                    <Typography className={classes.weight}>
                      Weight :
                      <br />
                      {weight} kg
                    </Typography>
                  </Grid>

                  <Grid item md={2}>
                    <Typography className={classes.baseExperience}>
                      Base Experience :
                      <br />
                      {base_experience}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <CircularProgress />;
    }
  }
}



const mapStateToProps = (state) => ({})

const mapDispatchToProps =(dispatch)=> ({

})



export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PokemonDetails));









