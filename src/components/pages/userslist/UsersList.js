import React,{useState} from 'react';
import "./UsersList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRow } from '../../../data';
import {Link} from "react-router-dom"

const UsersList = () => {

  const [data, setData] = useState(userRow);


  const handleDelete =(id) => {
    setData(data.filter(item=> item.id !== id))
  } 

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'user',
      width: 150,
       renderCell: (params) => {
         return(
            <div className="userListUser">
                <img  className="userListImg" src={params.row.avatar} alt="avatar" />
                {params.row.userName}
            </div>
         )
       }
    },

    
    {
      field: 'email',
      headerName: 'email ',
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
      field: 'transaction',
      headerName: 'transaction ',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => {
        return (
            <div>
            <Link to= {'/user/' + params.row.id} >
                <button className="userListEdit">Edit</button>
            </Link>
                
                <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id) }/>
            </div>
        )
      } 
    },
  ];
  


    return (
        <div className="userList">
            <DataGrid rows={data} disableSectionOnClick columns= {columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default UsersList
