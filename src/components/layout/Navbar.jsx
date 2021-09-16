import React from "react";
import "../../assets/styles/Navbar.scss";
import manna_logo from "../../icons/manna_logo.svg";
import SvgLogo from "./LogoComponent";

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
        <li className={'button'}>Strona Główna</li>
        <li className={'button'}>Menu</li>
        <li><img className={'logo'} src={manna_logo}/></li>
        {/*<li><SvgLogo className={'logo'} width={166} height={166}/></li>*/}
        <li className={'button'}>Galeria</li>
        <li className={'button'}>Event z Manną</li>
        {/*<li>{dropsy}</li>*/}
        {/*<li>{this.props.mopsy}</li>*/}
        {/*<li>{napis}</li>*/}
      </ul>

    </div>
  }
}


