import React from 'react'
import "./home.css";
import FeaturedInfo from "./../featuredInfo/FeatureInfo"
import Chart from '../../chart/Chart';
import {userData} from "../../../data";


const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"  />
            <div className="homeWidgets"> </div>
        </div>
    )
}

export default Home;
