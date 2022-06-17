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

import React, { Component } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config/config";

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(POKEMON_API_URL + "/" + id).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        console.log("response.data ", res.data);
        this.setState({ pokemon: res.data });
      }
    });
  }

  render() {
    return <div></div>;
  }
}
