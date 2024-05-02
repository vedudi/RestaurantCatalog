import { useParams } from "react-router-dom"
import Contain from "../components/Contain"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getDataByRestId } from "../redux/actions/productActions"
import RestDetail from "./Restaurant/RestDetail"
import ProdDetail from "./Restaurant/ProdDetail"


const Rest = () => {
    
 
const{id}=useParams()
const dispatch= useDispatch()

useEffect(()=>{
    dispatch(getDataByRestId(id))
},[])

  return (
  <div>
    <div className="shadow">
      <Contain>
        <RestDetail/>
      </Contain>
    </div>
    <Contain>
<ProdDetail/>
    </Contain>
  </div>
  )
}

export default Rest