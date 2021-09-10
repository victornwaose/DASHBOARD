import React from 'react';
import "./Sidebar.css";
import {LineStyle, Timeline, TrendingUp, Person,Assessment, Storefront, AttachMoney,BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@material-ui/icons';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper"> 
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem  active">
                            <LineStyle className="sidebarIcon"/> Home
                        </li>
                        <li className="sidebarListItem">
                             <Timeline className="sidebarIcon"/> Analytics 
                        </li>
                        <li className="sidebarListItem">
                             <TrendingUp className="sidebarIcon"/>Sale
                        </li>
                       
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem  active">
                            <Person className="sidebarIcon"/> User
                        </li>
                        <li className="sidebarListItem">
                             <Storefront className="sidebarIcon"/> Product 
                        </li>
                        <li className="sidebarListItem">
                             <AttachMoney className="sidebarIcon"/> Transactions 
                        </li>
                        <li className="sidebarListItem">
                             <Assessment className="sidebarIcon"/>Report
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem  active">
                            <MailOutline className="sidebarIcon"/> Mail
                        </li>
                        <li className="sidebarListItem">
                             <DynamicFeed className="sidebarIcon"/> Feedback
                        </li>
                        <li className="sidebarListItem">
                             <ChatBubbleOutline className="sidebarIcon"/> Message
                        </li>
                      
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem  active">
                            <BarChart className="sidebarIcon"/> Manage
                        </li>
                        <li className="sidebarListItem">
                             <WorkOutline className="sidebarIcon"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                             <Report className="sidebarIcon"/> Reports
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
