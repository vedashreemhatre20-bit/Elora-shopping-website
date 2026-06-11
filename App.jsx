import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;