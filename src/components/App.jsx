import React, {useState, Component, useContext} from "react";
// import {AnimatePresence, motion} from "framer-motion";
import {useTransition, animated} from "react-spring";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import {StackNavigator} from 'react-navigation';

import Navbar from "./layout/Navbar";
import MainArticle from "./layout/MainArticle";
import Menu from "./layout/Menu";

import Gallery from "./layout/GallerySlider";
import Event from "./layout/Event";


const App = () => {

  const transition = useTransition(true, {
    from: { x: 0, y: -800, opacity: 1},
    enter: { x: 0, y: 0, opacity: 1},
    leave: { x: 0, y: -800, opacity: 0}
  })

  const onEvent = (eventName) => {
    console.log(eventName)
  }


  return (

    <>
      <Navbar onEvent={onEvent}/>

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
