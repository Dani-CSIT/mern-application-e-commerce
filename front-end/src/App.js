import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';
import ShopHome from './Pages/ShopHome';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.png'
import women_banner from './Components/Assets/women_banner.png'
import kids_banner from './Components/Assets/kids_banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ShopHome/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kids'/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
