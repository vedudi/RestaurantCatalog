import api from "../../utils/api";
import ActionTypes from "../reducer/actionTypes";

const thunkfunc = () => {
  return (dispatch) => {};
};
export const getRest = () => (dispatch) => {
  dispatch({ type: ActionTypes.REST_LOADING });
  api
    .get("/restaurants")
    .then((res) =>
      dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: ActionTypes.REST_ERROR, payload: err.message})
    );
};
