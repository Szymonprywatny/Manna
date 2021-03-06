import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../../assets/styles/Event.scss";
import logo_fb from "../..//icons/logo_fb.svg";
import logo_insta from "../..//icons/logo_insta.svg";
import tort1 from "../..//icons/tort1.jpg"
import tort2 from "../..//icons/tort2.jpg";
import tort3 from "../..//icons/tort3.jpg"
import {useTransition, animated} from "react-spring";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import manna_logo from "../../icons/manna_logo.svg";

const Event = () => {
    const height = window.screen.height;
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: {opacity: 1, y: -height},
        enter: {opacity: 1,  y: 0},
        leave: {transform:  1, y: -height}
    })

    return <>{transition((style, item) => {
        return <animated.div style={style} className={'test2'}>
            {/*<Navbar/>*/}
            <div className={'mobile-navbar'}>
                <Link to={"/"}><img className={'logo'} src={manna_logo} alt={'logo'}/></Link>

            </div>
            <div className="main-event">

                <div className={"Event-header"}>
                    <h1>Event z Manną</h1>
                </div>

                <div className={"Event-catering"}>
                    <h2>Oferujemy usługi cateringowe oraz cukiernicze.</h2>
                    <h4>Skontaktuj się z nami i ustal spotkanie z naszym szefem kuchni. Do każdego
                        klienta <br/> podchodzimy indywidualnie i dla każdego układamy specjalne menu. <br/>
                        Cena zależy od ilośći osób, dla których brany jest catering oraz z różnorodności
                        przekąsek. <br/> Zamówienie cateringu wymaga dwutygodniowego wyprzedzenia.
                    </h4>
                </div>

                <div className={'Torty-txt'}>
                    <h3>Torty i ciasta na zamówienie</h3>
                    <h4>Torty to nasza specjalność</h4>
                </div>

                <div className={'Torty-img'}>
                    <img src={tort3}/>
                    <img className={'not-first-img'} src={tort2}/>
                    <img className={'not-first-img'} src={tort1}/>
                </div>

                <div className={'Event-footer'}>
                    <h4>Znajdź nas:</h4>
                    <ul>
                        <li className={'insta'}><a href={"https://www.instagram.com/mannacoffeespace/"}><img src={logo_insta}/></a></li>
                        <li><a href={"https://www.facebook.com/MannaCoffeeSpace"}><img src={logo_fb}/></a></li>
                    </ul>
                </div>


            </div>
        </animated.div>
    })}</>
}

export default Event;