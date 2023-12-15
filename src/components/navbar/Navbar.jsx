import './Navbar.css'
import { FaHashtag } from "react-icons/fa";
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

  return (
    <>
      <nav>
        <div className="logo">
          <FaHashtag fontSize={50} color='#6366f1' />
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


      <div className="hamburguer-container">
        <div className="logo">
          <FaHashtag fontSize={50} color='#6366f1' />
          <h2 className='nome-logo'>Ramon</h2>
        </div>
        {menu ? <IoClose fontSize={25} color='#6366f1' onClick={toggleMenu} /> : <GiHamburgerMenu fontSize={25} color='#6366f1' onClick={toggleMenu} />}
      </div>
      {menu && (
        <div className="nav-mobile">
          <ul className="list">
            <Link to="/" className='link-home'><code>#</code>Início</Link>
            <Link to="/projetos" className='links'><code>#</code>Projetos</Link>
            <Link to="/sobre mim" className='links'><code>#</code>Sobre Mim</Link>
            <Link to="/contatos" className='links'><code>#</code>Contatos</Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar