import '../../App.scss';
import griego from '../../assets/bebida/img-vitalinea-griego@2x.png'
import sinAzucar from '../../assets/bebida/img-vitalinea-sin-azucar@3x.png'
import bebible from '../../assets/bebida/img-vitalinea-bebible@3x.png'

function Carrousell() {

    return (
        <section className='carrousell-products-container'>
            <div className='carrousell-product-content pt-50'>
                <img className='product-vitalinea-img' src={griego} alt="griego"/>
                <h1 className='product-vitalinea-title'>Vitalínea Griego</h1>
            </div>
            <div className='carrousell-product-content'>
                <img className='product-vitalinea-img' src={sinAzucar} alt="sin azucar"/>
                <h1 className='product-vitalinea-title'>Vitalínea sin Azúcar</h1>
            </div>
            <div className='carrousell-product-content'>
                <img className='product-vitalinea-img' src={bebible} alt="bebile"/>
                <h1 className='product-vitalinea-title'>Vitalínea Bebible</h1>
            </div>
        </section>
    )
}

export default Carrousell