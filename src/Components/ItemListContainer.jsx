import { Link } from 'react-router-dom';

const ItemListContainer = ({ products, addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Agregar al carrito
              </button>
              <Link to={`/item/${product.id}`} className="block mt-2 text-blue-500">
                Ver detalle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;