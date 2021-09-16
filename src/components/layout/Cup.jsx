import React from "react";
import cup_src from "../..//icons/cup.svg";

export default class Cup extends React.Component {

  render() {

    return <div className="Cup-src">
      <img className={'Cup'} src={cup_src}/>
    </div>
  }
}