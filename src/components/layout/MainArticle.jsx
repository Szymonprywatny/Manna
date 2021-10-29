import React, {useEffect, useState} from "react";
import "../../assets/styles/MainArticle.scss";
import Cup from "./Cup";
import MainFooter from "./Mainfooter";
import {useTransition, animated} from "react-spring";

const MainArticle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: {opacity: 1, transform: "translate(0%, -200%)"},
    enter: {opacity: 1, transform: "translate(0%, 0)"},
    leave: {transform: "translate(0%, -50%)"}
  })

  return <>{transition((style, item) => {
    return <animated.div className={'test2'} style={style}>
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