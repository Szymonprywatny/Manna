import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./layout/Navbar";
import MainArticle from "./layout/MainArticle";
import Cup from "./layout/Cup";
import CupShadow from "./layout/CupShadow";
import MainFooter from "./layout/Mainfooter";
import Menu from "./layout/Menu";
import GalleryFooter from "./layout/GalleryFooter";
import Gallery from "./layout/GallerySlider";
import Event from "./layout/Event";


function App() {
  return (


    <Router>
      <div className="App">

        <header className="App-header">
          <Navbar/>
        </header>

        <Switch>
          <Route path="/" exact>
            <article className="App-MainArticle">
              <MainArticle/>
            </article>
            <Cup/>
            <CupShadow/>
            <MainFooter/>
          </Route>

          <Route path="/Menu">
            <Menu></Menu>
          </Route>

          <Route path="/Gallery">
            <Gallery/>
            <GalleryFooter/>
          </Route>

          <Route path="/Events">
            <Event/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
