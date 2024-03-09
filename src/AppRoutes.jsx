import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home.jsx';
import About from './components/view/About.jsx';
import SingleProduct from './components/view/SingleProduct.jsx';
import NotFound from './components/shared/NotFound.jsx';
import SignIn from './components/view/auth/SignIn.jsx';
import SignUp from './components/view/auth/SignUp.jsx';
import Products from './components/view/product/Product.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:url" element={<SingleProduct/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;