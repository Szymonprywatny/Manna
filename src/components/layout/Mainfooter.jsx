import React from "react";
import "../../assets/styles/Mainfooter.scss";

export default class MainFooter extends React.Component {

  render() {

    return <div className="main-footer">

        <div className={"slogan"}>
            <h1>MANNA</h1>
            <h2>z nieba spadła </h2>
            <h2>i daje kawę</h2>

        </div>

        <div className={"kontakt"}>
          <div className={"Adresy"}>
            <h4>ul. Gdańska 95</h4>
            <h4>tel: 515 029 337</h4>
            <h4>E-mail: manna.gdanska@gmail.com</h4>
          </div>

          <div className={"Znajdz"}>
            <h4>Znajdź nas:</h4>
            <ul>
              <li>insta</li>
              <li>facebook</li>
            </ul>
          </div>
        </div>
    </div>
  }
}