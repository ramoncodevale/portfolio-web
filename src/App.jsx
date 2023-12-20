import Inicio from "./components/inicio/Inicio"
import Navbar from "./components/navbar/Navbar"

import { Routes, Route } from "react-router-dom";
import Projetos from "./components/projetos/Projetos";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projetos" element={<Projetos />}/>
        
      </Routes>

    </>
  )
}

export default App