import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

import Product from "./Product";
import './Home.css';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
    let [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=15").then(res => {
            setProducts(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            { products.length === 0 && 
                <div className='loader-wrapper'>
                    <ClipLoader color={'orange'} loading={loading} css={override} size={150} />
                </div>
            }

            { products.length > 0 && 
                <div className='products'>
                {
                    products.map(product => 
                        <Product key={product.id} {...product} />
                    )
                } 
                </div>
            }
            <div className='footer'>
                <Link to="/help" className='link-style'>Shopping Help</Link>
            </div>
		</div>
  );
}

export default Home;
