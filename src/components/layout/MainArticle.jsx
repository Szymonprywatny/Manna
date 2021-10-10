import React, {useEffect, useState} from "react";
import "../../assets/styles/MainArticle.scss";
import Cup from "./Cup";
import MainFooter from "./Mainfooter";
import {motion} from "framer-motion";
import {useTransition, animated} from "react-spring";

const MainArticle = () =>  {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: -666, opacity: 1},
    enter: { x: 0, y: 0, opacity: 1},
    leave: { x: 0, y: -821, opacity: 0}
  })

  // useEffect(() => {
  //   setIsVisible(false)
  // }, [])
  //

  return <>{transition((style, item) => {
    return <animated.div className={'test2'}  style={style}>
      <div className={"main-article"}>
        <section>
          <h2>Kawiarnia inna niż <br/>wszystkie.</h2>
          <h3>Na słodko lub słono, a przede <br/>wszystkim kawa. Położona na <br/>wysokości Teatru Polskiego,
            pełna <br/>ciepła i artystycznego vibe'u</h3>
        </section>
      </div>
      <Cup/>
      <MainFooter/>
    </animated.div>
  })}</>
}

export default MainArticle;