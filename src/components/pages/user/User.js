import React from 'react';
import "./User.css";
import img from "../../../images/me.jpg";
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to ="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img  src={img} 
                            alt=""  
                            className="userShowImg"
                            />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle"> Software Engineer </span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Contact details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">0806575501</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">26/07/1994</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">London</span>
                        </div>
                    </div> 
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                 <label>Username</label>
                                <input type="text" placeholder="Anna" className="userUpdateInput" />
                            </div> 
                            <div className="userUpdateItem">
                                 <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                 <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                 <label>Phone Number</label>
                                <input type="text" placeholder="08165755001" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                 <label>Address</label>
                                <input type="text" placeholder="London" className="userUpdateInput" />
                            </div>     
                        </div>
                        
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                    <img src={img} alt="anna" className="userUpdateUpImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
