
import { Route, Routes } from 'react-router-dom';
import './__assets/css/bundle.css';
import './__assets/css/style.css'
import './App.css';
import Category from './components/Admin/Category';
import Dash from './components/Admin/Dash';
import Dashboard from './components/Admin/Dashboard';
import Products from './components/Admin/Products';
import Tag from './components/Admin/Tag';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import ProductSingle from './components/Pages/ProductSingle';
import Shop from './components/Pages/Shop';
import AddTag from './components/Admin/AddTag';
import ProductAdd from './components/Admin/ProductAdd';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

    //tag state
    const[tags, setTags] = useState([]);//empty array ta newa lagbe. nahole outpur asbe na
    
    //get all cats
    const [cats, setCats] = useState([]);

    const [products, setProducts] = useState([]);

    //find cat
    const cat_name = (id) => {
      if( id !==''){
        let cat = cats.find((data) => data.id == id );
        return cat.name;

      }
      
    }

    //slug genarate
    const makeSlug = (data) => {
      let arr = data.split(' ');
      return arr.join('-').toLowerCase();
    }


    //tag data update

    useEffect(() => {

      axios.get('http://localhost:5050/tags').then(res => {
        setTags(res.data.reverse());
      });

    }, []);

    useEffect(() => {

      axios.get('http://localhost:5050/categories').then(res => {
        setCats(res.data);
      });

    }, []);

    useEffect(() => {

      axios.get('http://localhost:5050/products').then(res => {
        setProducts(res.data);
      });

    }, []);


  return (
    <>  
      <Header />
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path ='/shop' element = {<Shop tags={tags} products={products} setProducts={setProducts} cats={cats} /> }/>
          <Route path ='/shop/:slug' element = {<ProductSingle cat_name = {cat_name}/>}/> 
          <Route path = '/admin' element = {<Dashboard />}>
              <Route path='/admin/dashboard' element = {<Dash />}/>
              <Route path='/admin/products' element = {<Products products={products}/>}/>
              <Route path='/admin/add-product' element = {<ProductAdd cats={cats} tags={tags} makeSlug={makeSlug}/>}/> 
              <Route path='/admin/category' element = {<Category cats={cats} makeSlug={makeSlug}/>}/>
              <Route path='/admin/tag' element = {<Tag tags={tags} makeSlug={makeSlug}/>}/>  
              <Route path='/admin/add-tag' element = {<AddTag />}/>    
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
