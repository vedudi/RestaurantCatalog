const initialState={
    isLoading:false,
    error:null,
    products:[]
}
const productReducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'X act':
            
            return state;
        case 'Y act':
            
            return state;
        case 'Z act':
            
            return state;
    
        default:
            return state;
    }
}
export default productReducer;