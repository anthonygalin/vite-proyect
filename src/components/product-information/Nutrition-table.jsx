import '../../App.scss';


function NutritionTable(props) {

    return (
        <div>
            {
                props.data.map((element) => {
                    return <div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Contenido energético kJ/Kcal</h6>
                            <p className='nutrition-text'>{element.enerKcal}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Proteínas (g)</h6>
                            <p className='nutrition-text'>{element.proteinas}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Grasas (lípidos) (g)</h6>
                            <p className='nutrition-text'>{element.grasasLip}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Grasas saturadas (g)</h6>
                            <p className='nutrition-text'>{element.grasasSat}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Carbohidratos (Hidratos de carbono) (g)</h6>
                            <p className='nutrition-text'>{element.carbohidratos}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Azúcares (g)</h6>
                            <p className='nutrition-text'>{element.azucares}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Azúcares añadidos (g)</h6>
                            <p className='nutrition-text'>{element.azucaresAdd}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Fibra dietetíca (g)</h6>
                            <p className='nutrition-text'>{element.fibra}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Sodio (g)</h6>
                            <p className='nutrition-text'>{element.sodio}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>Calcio (g)</h6>
                            <p className='nutrition-text'>{element.calcio}</p>
                        </div>
                        <div className='nutrition-content-container'>
                            <h6 className='nutrition-text'>%VNR*</h6>
                            <p className='nutrition-text'>{element.vnr}</p>
                        </div>
                    </div>;
                })
            }
        </div>
    )
}

export default NutritionTable