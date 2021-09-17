import React from "react";
import "../../assets/styles/Cup.scss";
import cup_src from "../..//icons/cup2.svg";

export default class Cup extends React.Component {

  render() {

    return <div className="Cup-img">

      <img className={'Cup'} src={cup_src}/>

    </div>
  }
}