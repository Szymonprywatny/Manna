// import '../assets/styles/App.css';
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
    <div className="App">

      <header className="App-header">
        <Navbar/>
      </header>

      {/*<div className={'Main-site'}>*/}
      {/*  <article className="App-MainArticle">*/}
      {/*   <MainArticle/>*/}
      {/*   </article>*/}
      {/*   <Cup/>*/}
      {/*   <CupShadow/>*/}
      {/*   <MainFooter/>*/}
      {/*</div>*/}

     <div className={'Menu-site'} >
       {/*<Menu></Menu>*/}
     </div>

     <div className={'Gallery-site'}>
       {/*<Gallery/>*/}
       {/*<GalleryFooter/>*/}
     </div>

     <div className={'Event-site'}>
      <Event/>
     </div>

    </div>
  );
}

export default App;
