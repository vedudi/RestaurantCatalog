import { Link } from "react-router-dom";
import { BsBasket3 } from 'react-icons/bs';
import Contain from "./Contain";

const Header = () => {
  return (
    <header className="shadow">
      <Contain>
        <div className="flex justify-between items-center">
        <Link to={'/'} className="text-2xl font-mono text-red-500 font-[900]">
            ThunkSepeti
          </Link>
          <div className="flex items-center gap-4">
            <button className="border border-red-500 py-1 px-3 rounded text-red-500 transition hover:bg-red-500 hover:text-white">giriş yap</button>
            <button className="border border-red-500 py-1 px-3 rounded transition bg-red-500 text-white hover:bg-red-300">kayıt ol</button>
        <Link to={'/cart'} className="hover:bg-red-500 hover:bg-opacity-15 rounded-full p-3">
            <BsBasket3 className="text-red-500 text-xl"/>
        </Link>
          </div>
        </div>
      </Contain>
    </header>
  );
};

export default Header;
