import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  // Calcular el subtotal sumando el precio de cada producto por su cantidad
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map(item => (
            <div key={item.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p className="text-lg font-bold">${item.price}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  -
                </button>
              </div>
            </div>
          ))}

          {/* Subtotal y Botón para ir al Checkout */}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Proceder al Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
