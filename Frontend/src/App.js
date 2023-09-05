import './App.css';
import  ComprarProductos from './Components/Carrito';
import Home from './Components/Home'
import DataProvider from './Components/DataContext';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Carrito' element={< ComprarProductos />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;