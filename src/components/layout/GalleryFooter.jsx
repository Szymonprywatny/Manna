import React from "react";
import "../../assets/styles/GalleryFooter.scss";
import logo_fb from "../..//icons/logo_fb.svg";
import logo_insta from "../..//icons/logo_insta.svg";

export default class MainFooter extends React.Component {

  render() {

    return <div className="gallery-footer">

        <div className={"slogan"}>
            {/*<h1>MANNA</h1>*/}
            {/*<h2>z nieba spadła </h2>*/}
            {/*<h2>i daje kawę.</h2>*/}

        </div>

        <div className={"kontakt"}>
          {/*<div className={"Adresy"}>*/}
          {/*  <h4>ul. Gdańska 95</h4>*/}
          {/*  <h4>tel: 515 029 337</h4>*/}
          {/*  <h4>E-mail: manna.gdanska@gmail.com</h4>*/}
          {/*</div>*/}

          <div className={"Znajdz"}>
            <h4>Znajdź nas:</h4>
            <ul>
              <li><a href={"https://www.instagram.com/mannacoffeespace/"}><img src={logo_insta}/></a></li>
              <li><a href={"https://www.facebook.com/MannaCoffeeSpace"}><img src={logo_fb}/></a> </li>
            </ul>

          </div>
        </div>
    </div>
  }
}