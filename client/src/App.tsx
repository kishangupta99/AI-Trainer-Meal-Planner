import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import FoodLog from "./pages/FoodLog"


const App = () => {
  return (
    <>
      <Routes>
        <Route path ='/' element ={<Layout />}></Route>
        <Route index element ={<Dashboard />}></Route>
        <Route path ="food" element ={<FoodLog/>}></Route>
      </Routes>
    </>
  )
}

export default App