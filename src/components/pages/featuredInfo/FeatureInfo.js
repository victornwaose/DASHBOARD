import React from 'react';
import "./FeaturedInfo.css";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

const FeatureInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-10% <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub"> Compared to last Month</span>
            </div> 
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,415</span>
                    <span className="featuredMoneyRate">-4% <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub"> Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,410</span>
                    <span className="featuredMoneyRate">24% <ArrowUpward className="featuredIcon positive "/></span>
                </div>
                <span className="featuredSub"> Compared to last Month</span>
            </div>  
        </div>
    )
}

export default FeatureInfo
