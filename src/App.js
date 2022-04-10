import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './services/api';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Initi()
  }, []);

async function Initi(){
  const resposta = await api.get('/posts')
  console.log(resposta.status)
}

  return (
    <div className="App">
      <h3>TESTE</h3>
      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/"> Página Inicial </Nav.Link>
        <Nav.Link as={Link} to="/alunos"> Cadastro  de alunos </Nav.Link>
        <Nav.Link as={Link} to="/sobre"> Sobre </Nav.Link>


      </Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/alunos" element={<Alunos/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
