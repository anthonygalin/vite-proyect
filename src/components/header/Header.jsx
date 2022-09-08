import '../../App.scss'
import logoVitaline from '../../assets/logos/logo-vitalinea.png'
import facebook from '../../assets/logos/facebook.png'
import facebookx3 from '../../assets/logos/img-social-facebook@3x.png'
import instagram from '../../assets/logos/instagram.png'
import instagramx3 from '../../assets/logos/img-social-instagram@3x.png'
import youtube from '../../assets/logos/youtube.png'
import youtubex3 from '../../assets/logos/img-social-instagram@3x.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faGlassWater, faHeart, faBlog} from '@fortawesome/free-solid-svg-icons'
import React, {useState, useEffect} from 'react';

function Header() {
    let [mobileNav, showMobileNav] = useState('display-none');

    function showNavMobile() {
        if (mobileNav === 'display-none') {
            return showMobileNav(mobileNav = 'display-block')
        }
        if (mobileNav === 'display-block') {
            return showMobileNav(mobileNav = 'display-none')
        }
    }

    useEffect(() => {
    })


    return (
        <header className='header-container'>
            <div className='container-logo-vitaline'>
                <img src={logoVitaline} alt="logo-vitalinea"/>
            </div>
            {/*mobile sidebar*/}
            <div className='mobile-nav-bar'>
                <div onClick={showNavMobile}>
                    <FontAwesomeIcon className='nav-bar-icon' icon={faBars}></FontAwesomeIcon>
                </div>
                <div id='mobile-nav-bar-content' className={mobileNav}>
                    <ul className='nav-bar-title-container'>
                        <li className='nav-bar-title'><FontAwesomeIcon className='mobile-nav-bar-icon' icon={faGlassWater}></FontAwesomeIcon>Nuestro productos</li>
                        <li className='nav-bar-title'><FontAwesomeIcon className='mobile-nav-bar-icon' icon={faHeart}></FontAwesomeIcon>Disfruta cuidarte</li>
                        <li className='nav-bar-title'><FontAwesomeIcon className='mobile-nav-bar-icon' icon={faBlog}></FontAwesomeIcon>Blog</li>
                    </ul>
                    <div className='mobile-social-media-logo-container'>
                        <img className='social-media-icon' src={facebookx3} alt="facebook"/>
                        <img className='social-media-icon' src={instagramx3} alt="instagram"/>
                        <img className='social-media-icon' src={youtubex3} alt="youtube"/>
                    </div>
                </div>
            </div>
            {/*  sidebar  */}
            <div id='nav-bar-content' className='navBar'>
                <ul className='nav-title-container'>
                    <li className='nav-title'>Nuestro productos</li>
                    <li className='nav-title'>Disfruta cuidarte</li>
                    <li className='nav-title'>Blog</li>
                </ul>
                <div className='social-media-logo-container'>
                    <img className='social-media' src={facebook} alt="facebook"/>
                    <img className='social-media' src={instagram} alt="instagram"/>
                    <img className='social-media' src={youtube} alt="youtube"/>
                </div>
            </div>
        </header>
    )
}

export default Header