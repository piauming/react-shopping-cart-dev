import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

import './Home.css';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products?limit=15")
    .then(res => {
      setProducts(res.data);
    })
    .catch(err => console.log(err));

  }, []);

  return (
    <div id="main">
      { (products.length > 0) && 
        <div>
          {
            products.map(product => 
              <div key={product.id}>{product.title}</div>
            )
          } 
        </div>
      }
      </div>
  );
}

export default Home;
