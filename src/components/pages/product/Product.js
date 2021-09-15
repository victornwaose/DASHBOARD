import React from 'react';
import "./Product.css";
import {Link} from "react-router-dom";
import Chart from '../../chart/Chart';
import { productData } from '../../../data';

const Product = () => {
    return (
        <div className="product">
           <div className="productTitleContainer">
               <h1 className="productTitle">Product</h1>
               <Link to="/newProduct">
                    <button className="productAddButton "> Create</button>
               </Link>
           </div>
           <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales P erformance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"  alt="" />
                        <span className="productName">Laptop</span>
                    </div>
                    <div className="productInfoBottom"></div>
                </div>
           </div>
           <div className="productBottom"></div>
        </div>
    )
}

export default Product
