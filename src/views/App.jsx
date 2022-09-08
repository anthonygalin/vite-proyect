import '../App.scss';
import Header from '../components/header/Header.jsx';
import ProductCard from "../components/product-card/Product-card.jsx";
import ProductInformation from "../components/product-information/Product-information.jsx";
import ProductCarrousell from "../components/product-carrousell/Product-carrousell.jsx";
import arrow from '../assets/icons/flecha.png';
import fresa2 from '../assets/fresas/fresa-2.png'
import fresa3 from '../assets/fresas/fresa-3.png'
import fresa4 from '../assets/fresas/fresa-4.png'
import fresa5 from '../assets/fresas/fresa-5.png'
import fresa5x2 from '../assets/fresas/fresa-5@2x.png';
import fresa6 from '../assets/fresas/fresa-6.png';
import fresa7 from '../assets/fresas/fresa-7.png';
import fresa8 from '../assets/fresas/fresa-8.png';
import fresa8x2 from '../assets/fresas/img-fresas-8@2x.png'
import fresa9 from '../assets/fresas/fresa-9.png'
import Footer from "../components/footer/Footer.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect, useRef} from "react";


function App() {

    const [showTopBtn, setShowTopBtn] = useState(false);
    const [showBotBtn, setShowBotBtn] = useState(true);
    const footerSection = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY)
            if (window.scrollY > 1300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
        window.addEventListener('scroll', () => {
            if (window.scrollY < 1300) {
                setShowBotBtn(true);
            } else {
                setShowBotBtn(false);
            }
        })
    })
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const scrollToBot = () => {
        window.scrollTo({
            top: footerSection.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <main>
            <Header/>
            <section className='main-container'>
                <ProductCard/>
                {/*Fresas*/}
                <div className='fresa5x2-container'>
                    <img className='fresa5x2' src={fresa5x2} alt=""/>
                </div>
                <div className='fresa8-container'>
                    <img className='fresa8' src={fresa8} alt=""/>
                </div>
                <div className='fresa3-container'>
                    <img className='fresa3' src={fresa3} alt=""/>
                </div>
                <div className='fresa4-container'>
                    <img className='fresa4' src={fresa4} alt=""/>
                </div>
                <div className='fresa2-container'>
                    <img className='fresa2' src={fresa2} alt=""/>
                </div>
                <div className='fresa6-container'>
                    <img className='fresa6' src={fresa6} alt=""/>
                </div>
                <div className='fresa7-container'>
                    <img className='fresa7' src={fresa7} alt=""/>
                </div>
                <div className='fresa5-container'>
                    <img className='fresa5' src={fresa5} alt=""/>
                </div>
                <div className='fresa9-container'>
                    <img className='fresa9' src={fresa9} alt=""/>
                </div>
                <div className='fresa8x2-container'>
                    <img className='fresa8x2' src={fresa8x2} alt=""/>
                </div>
                <div className='arrow-right-up'></div>
                {/**/}
            </section>
            <section className='information-container'>
                <ProductInformation/>
            </section>
            <section className='other-products-container'>
                <ProductCarrousell/>
            </section>
            <section ref={footerSection}>
                <Footer/>
            </section>
            {showBotBtn && (
            <div className='arrow-container'>
                <button className='arrow-button bounce' onClick={scrollToBot}><img src={arrow} alt="arrow"/></button>
            </div>
            )}
            {showTopBtn && (
                <div className='arrow-container-up'>
                    <button className='arrow-button-up bounce' onClick={goToTop}><FontAwesomeIcon icon={faArrowUp}/></button>
                </div>
            )}
        </main>
    )
}

export default App
