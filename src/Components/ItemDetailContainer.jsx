import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover" />
        <div className="ml-4">
          <p className="text-lg font-semibold">Precio: ${product.price}</p>
          <p className="text-lg">Stock: {product.stock}</p>
          <p className="mt-2">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;