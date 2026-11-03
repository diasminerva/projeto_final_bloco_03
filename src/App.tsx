import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ListaCategorias from './components/categorias/ListaCategorias';
import FormCategoria from './components/categorias/FormCategoria';
import DeletarCategoria from './components/categorias/DeletarCategoria';
import ListaProdutos from './components/produtos/ListaProdutos';
import FormProduto from './components/produtos/FormProduto';
import DeletarProduto from './components/produtos/DeletarProduto';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className='flex flex-col min-h-screen justify-between bg-[#fcfbf7]'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
