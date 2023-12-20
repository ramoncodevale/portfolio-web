import './Projetos.css'
import { projetos } from '../constants/data'
import CardsProjetos from '../cardsProjetos/cardsProjetos'



const Projetos = () => {
    return (
        <div className='projetos'>
            <div className="projeto-container-titulo">
                <h2 className='titulo-projetos'><code>/</code>projetos</h2>
                <p className='texto-projetos'>Lista dos meus projetos</p>
            </div>
            <div className="projetos-container">
                <p className='titulo-projeto'><code>#</code>projetos concluídos</p>
            </div>
            <div className="projetos-grid">
                {projetos.map((item)=>(
                    <CardsProjetos 
                    key={item.id}
                    technologies={item.technologies.join(' ')}
                    descrimption={item.descrimption}
                    name={item.name}
                    img={item.img}
                    url={item.url}
                    />
                ))}

            </div>
        </div>
    )
}

export default Projetos