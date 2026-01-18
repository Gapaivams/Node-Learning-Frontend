// import { useEffect, useState } from 'react'
import './App.css'
import CadastroUsuario from './pages/CadastroUsuario'
import ListaUsuarios from './pages/ListaUsuarios'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import api from './services/api';

function App() {

  return (
    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Sistema CRUD</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/lista">Lista</Link>
            <Link className="nav-link" to="/cadastrar">Cadastrar</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/lista" element={<ListaUsuarios />} />
          <Route path="/cadastrar" element={<CadastroUsuario/>} />
        </Routes>
      </div>

    </Router> 
  )
}

export default App
