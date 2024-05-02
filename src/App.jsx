import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Header from "./components/Header"
import Rest from "./pages/Rest"
import Cart from "./pages/Cart"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCart } from "./redux/actions/cartActions"

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCart())
  },[])
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/restaurant/:id" element={<Rest/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
