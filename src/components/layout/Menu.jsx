import React from "react";
import "../../assets/styles/Menu.scss";
import maszynko from "../..//icons/maszynko.jpg";
import logo_fb from "../..//icons/logo_fb.svg";
import logo_insta from "../..//icons/logo_insta.svg";

export default class Menu extends React.Component {

  render() {

    return <div className="Menu">

      <div className={'Maszynko'}>
        <img src={maszynko}/>
      </div>


      <div className={'MenuWhite'}>

        <div className={'WhiteHeader'}>
          <h1>Menu</h1>
        </div>

        <div className={'WhiteMenu'}>
          <ul>
            <li><h2>Na ciepło:</h2></li>
            <li><h3>Espresso 6,50</h3></li>
            <li><h3>Dopplo Espresso 8,50</h3></li>
            <li><h3>Americano 9,50</h3></li>
            <li><h3>Cappucino 10,50</h3></li>
            <li><h3>Caffe Latte 10.50</h3></li>
            <li><h3>Flat White 10,50</h3></li>
            <li><h3>Gorąca Czekolada 7,50</h3></li>
            <li><h3>Herbata Czarna, Zielona, Owocowa 8,00</h3></li>
            <br/>
            <li><h2>Na zimno:</h2></li>
            <li><h3>Kawa mrożona blindowana 12,50</h3></li>
            <li><h3>Espresso Tonic/Pomarańcza 12,50</h3></li>
            <li><h3>Domowa Lemoniada 12,00</h3></li>
            <li><h3>Sok wyciskany 10,00</h3></li>
          </ul>
        </div>

        <div className={'WhiteFooter'}>
        </div>

      </div>
      <div className={'MenuGreen'}>
        <div className={'GreenHeader'}>

        </div>

        <div className={'GreenMenu'}>
          <ul>
            <li><h2>Na słono:</h2></li>
            <li><h3>Bagietka z kurczakiem/</h3></li>
            <li><h3>tuńczykiem/humusem 8,50</h3></li>
            <li><h3>Sałatja z buraka/humusem/grecka 10,50</h3></li>
            <li><h3>Tarta Warzywna 35,00</h3></li>
            <li><h3>Pasztecik ze szpinakiem 6,00</h3></li>
            <li><h3>Zupa dnia 8,00</h3></li>
            <li><h3>Tost neapolitański 12,00</h3></li>
            <br/>
            <li><h2>Na słodko:</h2></li>
            <li><h3>Ciasteczko manna 6,50</h3></li>
            <li><h3>Chleb bananowy 2 szt 5,00</h3></li>
            <li><h3>CIasto dnia 8,90</h3></li>
            <li><h3>Tort dnia 8,90</h3></li>
            <li><h3>Jogurt dnia 8,90</h3></li>
            <li><h3>Kruche ciastka 3,50</h3></li>
          </ul>
        </div>

        <div className={'GreenFooter'}>
          <footer>
            <h2>Znajdź nas:</h2>
            <ul>
              <li><img src={logo_fb}/></li>
              <li><img src={logo_insta}/></li>
            </ul>
          </footer>
        </div>
      </div>
    </div>


  }
}