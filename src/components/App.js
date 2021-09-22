import '../assets/styles/App.css';
import Navbar from "./layout/Navbar";
import MainArticle from "./layout/MainArticle";
import Cup from "./layout/Cup";
import CupShadow from "./layout/CupShadow";
import MainFooter from "./layout/Mainfooter";
import Menu from "./layout/Menu";
import GalleryFooter from "./layout/GalleryFooter";
import GallerySLider from "./layout/GallerySlider";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Navbar/>
      </header>

      {/*<article className="App-MainArticle">*/}
      {/*  <MainArticle/>*/}
      {/*</article>*/}
      {/*<Cup/>*/}
      {/*<CupShadow/>*/}
      {/*<MainFooter/>*/}


      {/*<Menu></Menu>*/}
      <GallerySLider/>


      <GalleryFooter/>

    </div>
  );
}

export default App;
