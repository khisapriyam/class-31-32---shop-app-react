import axios from 'axios';
import React, { useEffect, useState } from 'react';
import product from '../../__assets/images/shop/1.jpg'

const Sidebar = ({ setProducts, cats, tags}) => {

    const [search, setSearch] = useState('');

    //product search by cat

    const handleCatSearch = (e, id) => {
        e.preventDefault();
        setSearch('');

        if( id !==''){
            axios.get(`http://localhost:5050/categories/${id}/products`).then(res => {
           
            setProducts(res.data);

        });

        }
        
        
    }

    //tag search
    const handleTagSearch = (e, id) => {
        e.preventDefault();
        setSearch('');

        if( id !==''){
            axios.get(`http://localhost:5050/tags/${id}/products`).then(res => {
           
            setProducts(res.data);

        });

        }
        

    }

    
    useEffect(() => {

        if( search !== ''){
            axios.get(`http://localhost:5050/products?q=${ search }`).then(res => {
           
                setProducts(res.data);
    
            },[])

        }

       
    })


  return (
    <div className="sidebar">
        <div className="widget">
            <h6 className="upper">Search Shop</h6>
            <form>
            <input type="text" placeholder="Search.." value={search} onChange={ e => setSearch(e.target.value)} className="form-control" />
            </form>
        </div>
        <div className="widget">
            <h6 className="upper">Categories</h6>
            <ul className="nav">
                {
                    cats.map(data => 
                        <li>
                            <a onClick={ (e) => handleCatSearch(e, data.id)} href={ data.id }>{ data.name }</a>
                        </li>
                        )
                }
                

            </ul>
        </div>

        <div className="widget">
            <h6 className="upper">Popular Tags</h6>
            <div className="tags clearfix">
                {
                    tags.map(data => 
                        <a onClick={ e => handleTagSearch(e, data.id)} href ="" >{ data.name }</a>
                        )
                }  
            </div>
        </div>  
        
        <div className="widget">
            <h6 className="upper">Trending Products</h6>
            <ul className="nav product-list">
                <li>
                    <div className="product-thumbnail">
                        <img src={ product } alt="" />
                    </div>
                    <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                </li>

                <li>
                    <div className="product-thumbnail">
                        <img src={ product } alt="" />
                    </div>
                    <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                </li>

                <li>
                    <div className="product-thumbnail">
                        <img src={ product } alt="" />
                    </div>
                    <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
                        
  )
};

export default Sidebar;