import { useSelector } from "react-redux";
import Contain from "./../../components/Contain";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { isLoading, error, cart } = useSelector((store) => store.cart);

  return (
    <Contain>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : cart.length === 0 ? (
        <p className="flex flex-col items-center gap-3">sepet boş <Link to={'/'} className="border p-2 shadow rounded hover:bg-gray-100"> ürün ekle </Link>
        </p>
        
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </Contain>
  );
};

export default Cart;
