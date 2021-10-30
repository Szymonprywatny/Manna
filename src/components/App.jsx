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

  // const onEvent = (eventName) => {
  //   console.log(eventName);
  //   console.log(eventName)
  // }
  return (
    <>
      <main className={"App"}>
        <Navbar/>
      {/*<MainArticle/>*/}
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
