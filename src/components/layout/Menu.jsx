import React, {useState} from "react";
import "../../assets/styles/Menu.scss";
import maszynko from "../..//icons/maszynko.jpg";
import logo_fb from "../..//icons/logo_fb.svg";
import logo_insta from "../..//icons/logo_insta.svg";
import {useTransition, animated} from "react-spring";

const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        from: {opacity: 0, transform: "translate(-100%, 0)"},
        enter: {opacity: 1, transform: "translate(0%, 0)"},
        leave: {transform: "translate(0%, -50%)"},
        delay: 100
    })

    return <>{transition((style, item) => {
        return <animated.div style={style}>
            <div className="Menu">
                <div className={'Maszynko'}>
                    <img src={maszynko}/>
                </div>

                <div className={'MenuWhite'}>
                    <div className={'WhiteHeader'}>
                        <h1>Menu</h1>
                    </div>

                    <div className={'WhiteMenu'}>
                        <ul>
                            <li><h2>Na ciepło:</h2></li>
                            <li><h3>Espresso</h3></li>
                            <li><h3>Dopplo Espresso</h3></li>
                            <li><h3>Americano</h3></li>
                            <li><h3>Cappucino</h3></li>
                            <li><h3>Caffe Latte</h3></li>
                            <li><h3>Flat White</h3></li>
                            <li><h3>Gorąca Czekolada</h3></li>
                            <li><h3>Herbata Czarna, Zielona, Owocowa</h3></li>
                            <br/>
                            <li><h2>Na zimno:</h2></li>
                            <li><h3>Kawa mrożona blindowana</h3></li>
                            <li><h3>Espresso Tonic/Pomarańcza</h3></li>
                            <li><h3>Domowa Lemoniada</h3></li>
                            <li><h3>Sok wyciskany</h3></li>
                        </ul>
                    </div>
                    <div className={'WhiteFooter'}>
                    </div>
                </div>

                <div className={'MenuGreen'}>
                    <div className={'GreenHeader'}>
                    </div>
                    <div className={'GreenMenu'}>
                        <ul>
                            <li><h2>Na słono:</h2></li>
                            <li><h3>Bagietka z kurczakiem/</h3></li>
                            <li><h3>tuńczykiem/humusem</h3></li>
                            <li><h3>Sałatka z buraka/humusem/grecka</h3></li>
                            <li><h3>Tarta Warzywna</h3></li>
                            <li><h3>Pasztecik ze szpinakiem</h3></li>
                            <li><h3>Zupa dnia</h3></li>
                            <li><h3>Tost neapolitański</h3></li>
                            <br/>
                            <li><h2>Na słodko:</h2></li>
                            <li><h3>Ciasteczko manna</h3></li>
                            <li><h3>Chleb bananowy 2 szt</h3></li>
                            <li><h3>CIasto dnia</h3></li>
                            <li><h3>Tort dnia</h3></li>
                            <li><h3>Jogurt dnia</h3></li>
                            <li><h3>Kruche ciastka</h3></li>
                        </ul>
                    </div>
                    <div className={'GreenFooter'}>
                        <footer>
                            <h4>Znajdź nas:</h4>
                            <ul>
                                <li><a href={"https://www.facebook.com/MannaCoffeeSpace"}><img src={logo_fb}/></a></li>
                                <li><a className={'insta'} href={"https://www.instagram.com/mannacoffeespace/"}><img
                                    src={logo_insta}/></a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </div>
        </animated.div>
    })}</>

}
export default Menu;