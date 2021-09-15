import React from 'react';
import "./Product.css";
import {Link} from "react-router-dom";
import Chart from '../../chart/Chart';
import { productData } from '../../../data';
import { Publish } from '@material-ui/icons';

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
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"  alt="" className=" " />
                        <span className="productName">Laptop</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">4523</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div> 
                </div>
           </div>
           <div className="productBottom">
               <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Laptop" /> 
                        <label>In Stock</label>
                        <select name="InStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="Active" id="Active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpLoad">
                            <img className="productUpLoadImg" src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed" alt=""  />
                            <label   htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
               </form>
           </div>
        </div> 
    )
}

export default Product
