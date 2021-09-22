import React from "react";
import "../../assets/styles/GallerSlider.scss";
import Gallery1 from "../..//icons/gallery1.JPG";
import Gallery2 from "../..//icons/gallery2.JPG";
import Gallery3 from "../..//icons/gallery3.JPG";
import Gallery4 from "../..//icons/gallery4.JPG";
export default class GallerySlider extends React.Component {

  render() {

    return <div className="main-article">
      <section>
        <div className={'Gallery'}>

          <div className={'Box-picture'}><img src={Gallery1}/></div>
          <div className={'Box-picture'}><img src={Gallery2}/></div>
          <div className={'Box-picture'}><img src={Gallery3}/></div>
          <div className={'Box-picture'}><img src={Gallery4}/></div>



        </div>

      </section>
    </div>
  }
}