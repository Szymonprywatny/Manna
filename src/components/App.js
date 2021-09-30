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
          <Route path="/Main">
            <div className={'Main-site'}>
              <article className="App-MainArticle">
               <MainArticle/>
               </article>
               <Cup/>
               <CupShadow/>
               <MainFooter/>
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Menu">
            <div className={'Menu-site'}>
              <Menu></Menu>
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Gallery">
            <div className={'Gallery-site'}>
              <Gallery/>
              <GalleryFooter/>
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Events">
            <div className={'Event-site'}>
              <Event/>
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
