import React from 'react';
import {useState} from "react";
import {useTransition, animated} from "react-spring";
import "../../assets/styles/test.scss";
import Menu from "./Menu";

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: {x: 0, y: 800, opacity: 0},
    enter: {x: 0, y: 0, opacity: 1},
    leave: {x:0, y:800, opacity: 1},
  });

  return (
    <div className={"app"}>
      <button onClick={() => {
        setIsVisible(v => !v);
      }}>{isVisible ? 'un-mount' : 'mount'}</button>

      <div className={"container"}>
        {transition((style, item) =>
          item ? <animated.div style={style} className={"test2"}>
            <Menu></Menu>
        </animated.div> : ''
        )}
      </div>
    </div>
  );
}

export default Test;
