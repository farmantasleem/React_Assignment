import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const[products,setproducts]=useState([]);

  async function getData(){
    const resp=await fetch("https://fakestoreapi.com/products");
    const data=await resp.json();
    setproducts(data)
  }
useEffect(()=>{
getData()
},[])
  return (
    <div>
      <header>
          <h1>All Products</h1>
      </header>

      <div id='showproduct'>
      {
        products.map((e)=>{
          return(
            <div className='productCard'>
            <img src={e.image}/>
            <div className='content'>
                <h1>{e.title}</h1>
                <p>Price: {e.price}</p>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
      </div>
          )
        })
      }

        <div className='productCard'>
              <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
              <div className='content'>
                  <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                  <p>Price: 120 inr</p>
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
              </div>
              

        </div>
        <div className='productCard'>
              <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
              <div className='content'>
                  <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                  <p>Price: 120 inr</p>
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
              </div>
              

        </div>
        <div className='productCard'>
              <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
              <div className='content'>
                  <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                  <p>Price: 120 inr</p>
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
              </div>
              

        </div>
        <div className='productCard'>
              <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
              <div className='content'>
                  <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                  <p>Price: 120 inr</p>
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
              </div>
              

        </div>
    </div>
    </div>
  );
}

export default App;
