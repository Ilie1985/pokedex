//this is the header of the website
//install material-ui/core @material-ui/icons
//import <AppBar/> component from material ui/core
// style AppBar to be fixed on the page
//import makeStyles from material-ui core to style the component AppBar in depth make a style sheet where we can put in all our styles
//import <Toolbar/> component from material ui/core
//put links inside Toolbar
//import Link from react-router-dom ,to home/pokedex page
//style the Link
//inside the Link put the webPage Name
// use Typography from material ui inside the Link to put the website name

import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//styling sheet ==============================
const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#000",
    variant: "h6",
  },
  link: {
    textDecoration: "none",
  },
  // Toolbar: {
  //   backgroundColor: "pink",
  // },
  title: {
    color: "#fff",
    cursor: "pointer",
  },
}));
//=========================================================
//AppNavigator component functionality

const AppNavigator = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar className={classes.Toolbar}>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title}>Pokedex</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavigator;
