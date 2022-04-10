import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
// import axios from 'axios';
import useFetch from '../../hooks/useFetch';

import Product from "./Product";
import './Home.css';

import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
   const [data, loading, error] = useFetch("https://fakestoreapi.com/products?limit=15");

    if (error) {
        console.log(error);
    }

    return (
        <div className='container'>
            { loading && 
                <div className='loader-wrapper'>
                    <PropagateLoader color={'orangered'} loading={loading} css={override} size={15} />
                </div>
            }

            { data?.length > 0 && 
                <div className='products'>
                {
                    data.map(product => 
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
