import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAtender from './Componentes/AtenderDadivas/Create';
import IndexAtender from './Componentes/AtenderDadivas/Index';
import AvaliacaoCreate from './Componentes/Avaliacaos/Create';
import AvaliacaoIndex from './Componentes/Avaliacaos/Index';
import Header from './Componentes/Cabecalho/cabecalho';
import CriarCreate from './Componentes/CriarDadivas/Create';
import CriarIndex from './Componentes/CriarDadivas/Index';
import EscolherCreate from './Componentes/EscolherDadivas/Create';
import EscolherIndex from './Componentes/EscolherDadivas/Index';
import { Ajudadores } from './Componentes/Home/Ajudadores';
import { Avaliate } from './Componentes/Home/Avaliar';
import Indexhome from './Componentes/Home/Indexpage';
import { Ongs } from './Componentes/Home/Ongs';
import About from './Componentes/Home/Sobre';
import Footer from './Componentes/Rodape/rodape';
import SolicitarCriar from './Componentes/SolicitarDadivas/Create';
import SolicitarIndex from './Componentes/SolicitarDadivas/Index';
import Login from './Componentes/Usuario/Login';
import Perfil from './Componentes/Usuario/Profile';
import Recovery from './Componentes/Usuario/Recovery';
import Cadastro from './Componentes/Usuario/Subscribe';
import { AuthProvider } from './Providers/auth';

function App() {

  return (
    <AuthProvider className="App-header">
      <BrowserRouter>
      <Header></Header>
        <Routes>
        <Route path='/' exact element={<Indexhome/>}/>
          <Route path='/sobre' element={<About/>}/>
          <Route path='/ongs' element={<Ongs/>}/>
          <Route path='/anjos' element={<Ajudadores/>}/>
          <Route path='/avaliacao' element={<Avaliate/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/recovery' element={<Recovery/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/atendercriar' element={<CreateAtender/>}/>
          <Route path='/atenderindex' element={<IndexAtender/>}/>
          <Route path='/avaliacaocreate' element={<AvaliacaoCreate/>}/>
          <Route path='/avaliacaoindex' element={<AvaliacaoIndex/>}/>
          <Route path='/criarcreate' element={<CriarCreate/>}/>
          <Route path='/criarindex' element={<CriarIndex/>}/>
          <Route path='/escolhercriar' element={<EscolherCreate/>}/>
          <Route path='/escolherindex' element={<EscolherIndex/>}/>
          <Route path='/solicitarcriar' element={<SolicitarCriar/>}/>
          <Route path='/solicitarindex' element={<SolicitarIndex/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
