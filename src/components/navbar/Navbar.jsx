import './Navbar.css'
import { FaHashtag } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <FaHashtag  fontSize={50}  color='#6366f1'/>
        <h2 className='nome-logo'>Ramon</h2>
      </div>
        <div className="container-ul">
            <ul className="list">
            <Link to="/" className='link-home'><code>#</code>Início</Link>
            <Link to="/projetos" className='links'><code>#</code>Projetos</Link>
            <Link to="/sobre mim" className='links'><code>#</code>Sobre Mim</Link>
            <Link to="/contatos" className='links'><code>#</code>Contatos</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar