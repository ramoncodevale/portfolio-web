import './Navbar.css'
import { FaHashtag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <FaHashtag  fontSize={50}  color='#6366f1'/>
        <h2 className='nome-logo'>Ramon</h2>
      </div>
        <div className="container-ul">
            <ul className="list">
            <li><a className='link-home' href="#"><code>#</code>Início</a></li>
            <li><a className='links' href="#"><code>#</code>Projetos</a></li>
            <li><a className='links' href="#"><code>#</code>Sobre Mim</a></li>
            <li><a className='links'  href="#"><code>#</code>Contatos </a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar