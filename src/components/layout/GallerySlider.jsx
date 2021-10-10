import React, {useState} from "react";
import "../../assets/styles/GallerSlider.scss";
import GalleryFooter from "./GalleryFooter";
import Img1 from "../..//icons/gallery1.JPG";
import Img2 from "../..//icons/gallery2.JPG";
import Img3 from "../..//icons/gallery3.JPG";
import Img4 from "../..//icons/gallery4.JPG";
import {useTransition, animated} from "react-spring";
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    // {
    //   id: 4,
    //   imgSrc: Img4,
    // }
  ]

  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -1666, y: 0, opacity: 0},
    enter: { x: 0, y: 0, opacity: 1},
    leave: { x:4321, y: 0, opacity: 0}
  })

  const closeModal = () => setModel(false)

  return <>{transition((style, item) => {
    return <animated.div style={style}>

      <div className={'Gallery-pager'}>
        <div className={'GalleryHeader'}>
          <h1>Galeria</h1>
        </div>

        <div onClick={closeModal} className={model ? "model open" : "model"}>
          <img src={tempimgSrc}/>
        </div>

        <div className={'Gallery'}>

          {data.map((item, index) => {
            return (
              <div className={'pics'} key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc}/>
                {/* Close icon */}
              </div>
            )
          })}
        </div>

        <GalleryFooter/>
      </div>


    </animated.div>
  })}</>

}

export default Gallery;