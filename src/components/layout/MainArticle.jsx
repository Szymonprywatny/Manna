import React, {useEffect, useState} from "react";
import "../../assets/styles/MainArticle.scss";
import Cup from "./Cup";
import MainFooter from "./Mainfooter";
import {useTransition, animated} from "react-spring";
import {Link} from "react-router-dom";
import manna_logo from "../../icons/manna_logo.svg";
import Navbar from "./Navbar";
const MainArticle = () => {
  const height = window.screen.height;
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: {opacity: 1, y: -height},
    enter: {opacity: 1,  y: 0},
    leave: {transform:  1, y: -height}
    // delay: 200
  })

  return <>{transition((style, item) => {
    return <animated.div className={'test2'} style={style}>

    {/*<Navbar/>*/}
      <div className={'mobile-navbar'}>
        <Link to={"/"}><img className={'logo'} src={manna_logo} alt={'logo'}/></Link>
      </div>

      <div className={"main-article"}>
        <section>
          <h2>Kawiarnia inna niż <br/>wszystkie.</h2>
          <h3>Na słodko lub słono, a przede <br/>wszystkim kawa. Położona na wysokości<br/> Teatru Polskiego,
            pełna ciepła i<br/> artystycznego vibe'u</h3>
        </section>
      </div>
      <Cup/>
      <MainFooter/>
    </animated.div>
  })}</>
}

export default MainArticle;