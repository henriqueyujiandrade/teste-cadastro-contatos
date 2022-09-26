import { Routes, Route } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const Rotas = () => {
  return(
  <>
  <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard/:id" element={<DashboardPage/>}/>          
  </Routes>
  </>
  )
}

export default Rotas