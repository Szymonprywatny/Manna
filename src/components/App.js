import '../assets/styles/App.css';
import Navbar from "./layout/Navbar";
import MainArticle from "./layout/MainArticle";
import Cup from "./layout/Cup";
import MainFooter from "./layout/Mainfooter";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Navbar/>
      </header>

      <article className="App-MainArticle">
        <MainArticle/>
      </article>

{/*      <Cup/>*/}

      <footer className="App-Mainfooter">
        <MainFooter/>
      </footer>

    </div>
  );
}

export default App;
