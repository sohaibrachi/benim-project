import{BrowserRouter as Router, Route , Routes} from "react-router-dom"
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import  { Shop } from "./pages/menu/Menu"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import ReservationPage from "./pages/reservation/ReservationPage"
import { Cart } from "./pages/cart/cart"
import { ShopContextProvider } from "./contexts/shop-context"



function App() {
 
  return (
   <div className="App">
    <ShopContextProvider>
       <Router>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/menu" element={<Shop/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/reservation" element={<ReservationPage/>} />
         <Route path="*" element={<h1 >PAGE NOT FIND 404</h1> } />
         </Routes>
         
         <Footer/>  
         
      </Router>
    </ShopContextProvider>

      
   </div>
     
    
  )
}

export default App
