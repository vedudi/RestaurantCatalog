import api from '../../utils/api'
import ActionTypes from '../reducer/actionTypes'

export const getDataByRestId=(id)=>async(dispatch)=>{
dispatch({type:ActionTypes.PROD_LOADING})

    const req1= api.get(`/restaurants/${id}`)
    const req2= api.get(`/products?restaurantId=${id}`)
    try {
        const resp= await Promise.all([req1, req2])
        dispatch({type:ActionTypes.PROD_SUCCESS, payload:resp})
    } catch (err) {
        dispatch({type:ActionTypes.PROD_ERROR, payload:err.message})
    }

}