import React from 'react';
import "./User.css";
import img from "../../../images/me.jpg";
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching} from '@material-ui/icons';

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Edit User</button>
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
                        <span className="userShowTitle">Account details</span>
                        <div>
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div>
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">0806575501</span>
                        </div>
                        <div>
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">26/07/1994</span>
                        </div>
                        <div>
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div>
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">London</span>
                        </div>
                    </div> 
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    )
}

export default User;
