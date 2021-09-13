import React from 'react';
import "./UsersList.css";
import { DataGrid } from '@material-ui/data-grid';




const UsersList = () => {

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
  
  ];
  
  const rows = [
    { id: 1, 
      userName:"jonsown", 
      avatar:"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", 
      email:"jonsown@gmail.com" ,
      status:"active",
      transaction: "$120" 
    },
  { id: 2, 
    userName:"jonsown", 
    avatar:"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", 
    email:"jonsown@gmail.com" ,
    status:"active",
    transaction: "$120" 
},
{ id: 3, userName:"jonsown", 
  avatar:"https://images.unsplash.com/photo-1503443207922-dff7d543fd0e", 
  email:"jonsown@gmail.com" ,
  status:"active",
  transaction: "$120" 
},  
  ];

    return (
        <div className="userList">
            <DataGrid rows={rows} columns= {columns} pageSize={5} checkboxSelection />
        </div>
    )
}

export default UsersList
