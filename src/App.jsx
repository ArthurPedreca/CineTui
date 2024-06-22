import { Outlet } from "react-router-dom"
import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/Footer"



function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
     
  )
}

export default App
