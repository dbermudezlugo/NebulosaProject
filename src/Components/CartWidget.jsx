import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="flex items-center text-white">
      <FaShoppingCart className="text-2xl mr-2" />
      <span className="bg-red-600 rounded-full px-2 py-1 text-xs">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
