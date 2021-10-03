import React from "react";
import "../../assets/styles/Navbar.scss";
import manna_logo from "../../icons/manna_logo.svg";
import {Link} from 'react-router-dom';
export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      napis: "Napis"
    }
  }



  componentDidMount(){
    setTimeout(() => {
      this.setState(() => {
        return { napis: "Wcale nie napis koleżko" }
      })
    }, 5000)
  }

  componentDidUpdate() {

  }


  render() {
    const {dropsy} = this.props;
    const {napis} = this.state

    return <div className="app-navbar">
      <ul>
        <li className={'button'}><Link to={"/"}>Strona Główna</Link> </li>
        <li className={'button'}><Link to={"/Menu"}>Menu</Link></li>
        <li><Link to={"/"}><img className={'logo'} src={manna_logo}/></Link></li>
        {/*<li><SvgLogo className={'logo'} width={166} height={166}/></li>*/}
        <li className={'button'}><Link to={"/Gallery"}>Galeria</Link></li>
        <li className={'button'}><Link to={"/Events"}>Event z Manną</Link></li>
        {/*<li>{dropsy}</li>*/}
        {/*<li>{this.props.mopsy}</li>*/}
        {/*<li>{napis}</li>*/}
      </ul>

    </div>
  }
}


