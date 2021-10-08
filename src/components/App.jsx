import React, {useState, Component, useContext, __RouterContext} from "react";
import {Route, Switch} from 'react-router-dom';
// import {AnimatePresence, motion} from "framer-motion";
import {useTransition, animated} from "react-spring";
import {useLocation} from "react-router-dom";
// import {StackNavigator} from 'react-navigation';

import Navbar from "./layout/Navbar";
import MainArticle from "./layout/MainArticle";
import Menu from "./layout/Menu";

import Gallery from "./layout/GallerySlider";
import Event from "./layout/Event";


const App = () => {


  return (

    <>
      <Navbar/>

      <main className={"App"}>

        <Switch>
          <Route exact path="/" component={MainArticle}/>
          <Route path="/Menu" component={Menu}/>
          <Route path="/Gallery" component={Gallery}/>
          <Route path="/Events" component={Event}/>
        </Switch>
      </main>

    </>
  );
}


export default App;
