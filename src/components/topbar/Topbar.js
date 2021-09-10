import React from 'react';
import "../../css/Topbar.css";
import {Notifications, Language, Settings} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">dash</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <Notifications/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
