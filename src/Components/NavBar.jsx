import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">NebulosaProject</h1>
        <ul className="flex space-x-4">
          <li className="text-white cursor-pointer">Sobre Nosotros</li>
          <li className="text-white cursor-pointer">Nuestros Servicios</li>
          <li className="text-white cursor-pointer">Contactanos</li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;