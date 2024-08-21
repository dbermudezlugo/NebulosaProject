import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Cargar productos desde el archivo JSON
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <NavBar cartItems={cart} />
      <Routes>
        <Route path="/" element={<ItemListContainer products={products} addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer products={products} addToCart={addToCart} />} />
        <Route path="/item/:id" element={<ItemDetailContainer products={products} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;