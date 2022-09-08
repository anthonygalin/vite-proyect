import '../../App.scss';
import NutritionTable from "./Nutrition-table.jsx";
import React, {useState, useEffect} from 'react';


function ProductInformation() {

    let [nutrition, setNutrition] = useState([
        {
            enerKcal: '413,2/97,9',
            proteinas: '5.3',
            grasasLip: '2.1',
            grasasSat: '1.4',
            carbohidratos: '12.4',
            azucares: '7.7',
            azucaresAdd: '0.1',
            fibra: '0.0',
            sodio: '92.7',
            calcio: '199.6',
            vnr: '22'
        }
    ]);

    return (
        <div>
            <div>
                <h1 className='product-info-title'>Informacion nutrimental</h1>
            </div>
            <div className='product-info-container'>
                <div>
                    <div className='product-info-description-container'>
                        <h2 className='product-info-description'>
                            Vitalínea® Bebible Guayaba 217gr
                            Valor promedio por porción de 217gr
                        </h2>
                        <h2 className='product-info-description'>
                            Porciones por envase: 1
                        </h2>
                    </div>
                    <div className='product-info-ingredients-container'>
                        <h6 className='product-info-ingredients-tittle'>Ingredientes:</h6>
                        <p className='product-info-ingredients'>
                            Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de
                            fruta
                            guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y
                            cultivos lácticos.
                        </p>
                    </div>
                </div>
                <div className='product-info-nutrition-table-container'>
                    <NutritionTable data={nutrition}/>
                </div>
            </div>
        </div>
    )
}

export default ProductInformation