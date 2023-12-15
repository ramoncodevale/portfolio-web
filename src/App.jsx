import Inicio from "./components/inicio/Inicio"
import Navbar from "./components/navbar/Navbar"

import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
       
          <Route path="/" element={<Inicio />} />
      </Routes>
   
    </>
  )
}

export default App