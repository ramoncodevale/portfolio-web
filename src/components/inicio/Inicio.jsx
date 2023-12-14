import './Inicio.css'

import Foto from '../../assets/minha-foto.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Inicio = () => {
  return (
    <>
      <div className='inicio'>
        <div className="inicio-container">
        <h1 className='titulo-inicio'>Eu sou Ramon Valentim <br></br><span>Desenvolvedor Front-End <br></br></span><br></br>
        </h1>
          <p className='texto-inicio'>Eu crio sites responsivos onde a tecnologia encontra <br></br> a criatividade</p>
      <div className="botao-container">
        <button>Linkedin <FaLinkedin  fontSize={16}/></button>
        <button>Github <FaGithub fontSize={16} /></button>
      </div>
        </div>
       <div className='img-perfil'>
        <img className='foto-perfil' src={Foto} alt='foto de perfil' />
       </div>
      </div>
    </>
  )
}

export default Inicio