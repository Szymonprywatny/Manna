import React, {useState} from "react";
import "../../assets/styles/Navbar.scss";
import manna_logo from "../../icons/manna_logo.svg";
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import {useTransition, animated} from "react-spring";
import MainArticle from "./MainArticle";


const Navbar = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     napis: "Napis"
  //   }
  // }
  //
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState(() => {
  //       return {napis: "Wcale nie napis koleżko"}
  //     })
  //   }, 5000)
  // }

  // componentDidUpdate() {
  //
  // }
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: -800, opacity: 1},
    enter: { x: 0, y: 0, opacity: 1},
    leave: { x: 0, y: -800, opacity: 0}
  })



    // const {dropsy} = this.props;
    // const {napis} = this.state

    return <div className="navbarsite">

      <div className={"navbar"}>
        <ul>
          <NavLink exact to={""} className={"nav-item"} activeClassName={"nav-item-active"}
                   onClick={() => {
                   setIsVisible(v => !v);
                    }}
          >Strona Główna</NavLink>
          <NavLink to={"/Menu"} className={"nav-item"} activeClassName={"nav-item-active"}>Menu</NavLink>
          <Link to={"/"}><img className={'logo'} src={manna_logo}/></Link>
          {/*<li><SvgLogo className={'logo'} width={166} height={166}/></li>*/}
          <NavLink to={"/Gallery"} className={"nav-item"} activeClassName={"nav-item-active"}>Galeria</NavLink>
          <NavLink to={"/Events"} className={"nav-item"} activeClassName={"nav-item-active"}>Event z Manną</NavLink>
          {/*<li>{dropsy}</li>*/}
          {/*<li>{this.props.mopsy}</li>*/}
          {/*<li>{napis}</li>*/}
        </ul>

      </div>


      {/*<button onClick={() => {*/}
      {/*  setIsVisible(v => !v);*/}
      {/*}}>klik</button>*/}
      {/*{transition((style, item) =>*/}
      {/*  item ? <animated.div style={style}><MainArticle/></animated.div> : '')*/}
      {/*}*/}
    </div>
  }

export default Navbar;

