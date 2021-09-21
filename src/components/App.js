import '../assets/styles/App.css';
import Navbar from "./layout/Navbar";
import MainArticle from "./layout/MainArticle";
import Cup from "./layout/Cup";
import CupShadow from "./layout/CupShadow";
import MainFooter from "./layout/Mainfooter";
import Menu from "./layout/Menu";


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
      {/*<footer className="App-Mainfooter">*/}
      {/*  <MainFooter/>*/}
      {/*</footer>*/}

      <Menu></Menu>

    </div>
  );
}

export default App;
