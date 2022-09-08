import '../../App.scss';

function Tags(props) {


    return (
        <section className='tags-container'>
            <div><h4 className='tag-title'>Sabor:</h4></div>
            {
                props.data.map((element) => {
                    return <div key={element.name} className={element.active === true ? 'active-tag' : 'inactive-tag'}>
                        <p className='tag-text'>{element.name}</p>
                    </div>;
                })
            }
        </section>
    )
}

export default Tags