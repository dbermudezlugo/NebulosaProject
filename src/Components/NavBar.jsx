import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Nebulosa</Link>
        <ul className="flex space-x-4">
          <li><Link to="/category/aretes" className="text-white">Aretes</Link></li>
          <li><Link to="/category/collares" className="text-white">Collares</Link></li>
          <li><Link to="/category/figuras" className="text-white">Figuras</Link></li>
          <li><Link to="/category/cuadros" className="text-white">Cuadros</Link></li>
          <li><Link to="/category/mugs" className="text-white">Mugs</Link></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;