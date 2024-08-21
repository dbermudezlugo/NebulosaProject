import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="flex items-center text-white">
      <FaShoppingCart className="text-2xl mr-2" />
      <span className="bg-red-600 rounded-full px-2 py-1 text-xs">5</span>
    </div>
  );
};

export default CartWidget;