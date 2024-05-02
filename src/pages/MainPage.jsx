import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/api";
import ActionTypes from "../redux/reducer/actionTypes";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestCard from "../components/RestCard";
import { getRest } from "../redux/actions/restaurantActions";
import Contain from "../components/Contain";

const MainPage = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRest());
  }, []);

  return (
    <Contain>
      <h1 className="text-3xl">Tüm Restoranlar</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={() => dispatch(getRest())} />
      ) : (
        <div className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {restaurants.map((rest) => (
            <RestCard key={rest.id} data={rest} />
          ))}
        </div>
      )}
    </Contain>
  );
};

export default MainPage;
