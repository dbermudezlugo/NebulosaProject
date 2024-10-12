import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [showForm, setShowForm] = useState(false);

  // Calcular el subtotal sumando el precio de cada producto por su cantidad
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Mostrar el formulario al hacer clic en "Finalizar compra"
    setShowForm(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Mostrar el detalle de los productos si hay items en el carrito */}
      {cartItems.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Detalle de Compra</h2>
          <ul className="mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          {/* Subtotal */}
          <div className="flex justify-between mb-4">
            <span className="text-lg font-bold">Subtotal:</span>
            <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
          </div>

          {/* Botón para Finalizar compra */}
          <div className="mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
              onClick={handleCheckout}
            >
              Finalizar Compra
            </button>
          </div>

          {/* Mostrar el formulario solo si el botón ha sido presionado */}
          {showForm && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Datos del Cliente</h2>
              <form className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre:</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingresa tu correo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Dirección de Envío:</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingresa tu dirección"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono:</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingresa tu teléfono"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
                >
                  Confirmar Compra
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">El carrito está vacío</h2>
        </div>
      )}
    </div>
  );
};

export default Checkout;