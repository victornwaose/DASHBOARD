import React from 'react'
import "./home.css";
import FeaturedInfo from "./../featuredInfo/FeatureInfo"
import Chart from '../../chart/Chart';


const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}

export default Home;
