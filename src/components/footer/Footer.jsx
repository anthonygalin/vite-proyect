import '../../App.scss';
import logo1 from '../../assets/logos/img-logo-danone@3x.png'
import logo2 from '../../assets/logos/img-logo-footer.png'



function Footer() {

    return (
        <footer className='footer'>
            <div className='footer-logo-container'>
                <img className='footer-logo logo1' src={ logo1 } alt="logo1"/>
                <img className='footer-logo logo2' src={ logo2 } alt="logo2"/>
            </div>
            <div className='product-services-container'>
                <h6 className='product-services'>
                    Términos y condiciones| Políticas de privacidad | Aviso de privacidad
                </h6>
                <p className='product-services'>
                    Danone de México 2017 ©. Todos los derechos reservados 2017
                </p>
            </div>
        </footer>
    )
}

export default Footer