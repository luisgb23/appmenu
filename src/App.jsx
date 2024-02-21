//import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaMenu from "./components/ListaMenu.jsx";
import Desayuno from "./components/Desayuno.jsx";
import MediaManiana from "./components/MediaManiana.jsx";
import Menu from "./components/Menu.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
        <Menu/>
        <div className="container mt-4">
          <Routes>
            <Route path='/' element={<ListaMenu/>}/>
            <Route path='/desayuno' element={<Desayuno/>}/>
            <Route path='/mediamaniana' element={<MediaManiana/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
