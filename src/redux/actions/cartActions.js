import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../reducer/actionTypes";
import { toast } from "react-toastify";

export const getCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });
  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.CART_ERROR, payload: err.message })
    );
};

export const addToBasket = (product, restName) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    name: restName,
    amount: 1,
  };
  api
    .post("/cart", newItem)
    .then(() => {
      dispatch({ type: ActionTypes.ADD_ITEM, payload: newItem });
      toast.success(`${newItem.title} sepete eklendi`);
    })
    .catch(() => toast.error("üzgünüz bir sorun oluştu"));
};

export const updateItem=(id,newAmount)=>(dispatch)=>{
  api.patch(`/cart/${id}`,{amount:newAmount}).then((res)=>{
    dispatch({
      type:ActionTypes.UPDATE_ITEM,payload:res.data
    })
    toast.info(`ürün miktarı güncellendi (${newAmount})`)
  })
  .catch(()=>toast.error('üzgünüz bir sorun oluştu'))
}

export const deleteItem=(id)=>(dispatch)=>{
  api.delete(`/cart/${id}`).then(()=>{
    dispatch({type:ActionTypes.DELETE_ITEM, payload:id})
    toast.warning('ürün sepetten kaldırıldı')
  })
  .catch(()=>toast.error('üzgünüz bir sorun oluştu'))
}