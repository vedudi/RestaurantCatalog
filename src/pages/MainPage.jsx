import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/api";
import ActionTypes from "../redux/reducer/actionTypes";

const MainPage = () => {
  const restaurantState = useSelector((store) => store.restaurant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ActionTypes.REST_LOADING });
    api
      .get('/restaurants')
      .then((res) =>
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: ActionTypes.REST_ERROR, payload: err.message })
      );
  }, []);
  return <div>mainpage</div>;
};

export default MainPage;
