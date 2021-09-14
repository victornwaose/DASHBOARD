import React from 'react';
import "./User.css";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Edit User</button>
            </div>
            <div className="userContainer">
                <div className="userShow"></div>
                <div className="userUpdate"></div>
            </div>
        </div>
    )
}

export default User;
