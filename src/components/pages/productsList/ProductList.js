import React, {useState} from 'react';
import "./ProductsList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRow } from '../../../data';
import {Link} from "react-router-dom"



const ProductList = () => {
    const [data,  setData] =useState(productRow);


    const handleDelete =(id) => {
        setData(data.filter(item=> item.id !== id))
      } 
    
      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'Product',
          headerName: 'Product',
          width: 150,
           renderCell: (params) => {
             return(
                <div className="productListUser">
                    <img  className="productListImg" src={params.row.avatar} alt="avatar" />
                    {params.row.productName}
                </div>
             )
           }
        },
    
        
        {
          field: 'stock',
          headerName: 'Stock ',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 210,
        },
        {
          field: 'status',
          headerName: 'status ',
          width: 160,
        },
        {
          field: 'price',
          headerName: 'Price  ',
          width: 180,
        },
        {
          field: 'action',
          headerName: 'Actions',
          width: 180,
          renderCell: (params) => {
            return (
                <div>
                <Link to= {'/product/' + params.row.id} >
                    <button className="productListEdit">Edit</button>
                </Link>
                    
                    <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row.id) }/>
                </div>
            )
          } 
        },
      ];
    return (
        <div className="productslist">
            <DataGrid 
                rows={data} 
                disableSectionOnClick 
                columns= {columns} 
                pageSize={8} 
                checkboxSelection 
            />
        </div>
    )
}

export default ProductList
