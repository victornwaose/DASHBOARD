import React from 'react';
import "./NewProduct.css";
import { Publish } from '@material-ui/icons';

const NewProduct = () => {
    return (
        <div className="newProduct">
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

export default NewProduct;
