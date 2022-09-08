import '../../App.scss';
import boteFresa from '../../assets/bebida/bote-fresa.png'
import Tags from "./Tags.jsx";
import React, {useState, useEffect} from 'react';
import logo1 from "../../assets/logos/avalado.png";
import logo2 from "../../assets/logos/100-kcal.png";

function ProductCard() {

    let [tags, setTags] = useState([
        {name: 'Fresa', active: true},
        {name: 'Guayaba', active: false},
        {name: 'Toronja', active: false}
    ]);

    return (
        <section className='product-container'>
            <div>
                <img className='product-img' src={boteFresa} alt=""/>
            </div>
            <div className='product-data-container'>
                <div>
                    <Tags data={tags}/>
                    <h1 className='product-title'>Vitalínea® Bebible Fresa 217 gr.</h1>
                </div>
                <div>
                    <p className='product-description'>¡La presentación ideal para llevar contigo! Vitalínea bebible es
                        la opción si eres de las personas
                        que siempre están activas y quieren probar algo sano, rico y práctico.
                    </p>
                </div>
                <div className='product-button-container'>
                    <button className='product-button'>Comprar en Walmart</button>
                </div>
                <div className='logo-container'>
                    <div>
                        <img className='brand-logo' src={logo1} alt="logo1"/>
                    </div>
                    <div>
                        <img className='brand-logo logo2' src={logo2} alt="logo2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard