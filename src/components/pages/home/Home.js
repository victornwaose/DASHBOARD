import React from 'react'
import "./home.css";
import FeaturedInfo from "./../featuredInfo/FeatureInfo"
import Chart from '../../chart/Chart';
import {userData} from "../../../data";
import WidgetsSm from '../../WidgetsSm/WidgetsSm';
import WidgetsBig from "../../WidgetsBig/WidgetsBig";

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"  />
            <div className="homeWidgets">
                <WidgetsSm/>
                <WidgetsBig/>
            </div>
        </div>
    )
}

export default Home;
