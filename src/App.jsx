import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

// Importar Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './config/firebaseConfig';

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, '1A'));
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Productos cargados desde Firestore:', productsList); // Verifica los datos aquí
        setProducts(productsList);
      } catch (error) {
        console.error('Error al cargar los productos desde Firebase:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
  
    // Si ya existe en el carrito
    if (existingProduct) {
      // Comprobar si la cantidad en el carrito es menor que el stock disponible
      if (existingProduct.quantity < product.stock) {
        setCart(
          cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        alert(`No puedes agregar más de ${product.stock} unidades de ${product.name}.`);
      }
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      if (product.stock > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
      } else {
        alert(`El producto ${product.name} está fuera de stock.`);
      }
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart
      .map(item => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
      .filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <NavBar cartItems={cart} />
      <Routes>
        <Route path="/" element={<ItemListContainer products={products} addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer products={products} addToCart={addToCart} />} />
        <Route path="/item/:id" element={<ItemDetailContainer products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
