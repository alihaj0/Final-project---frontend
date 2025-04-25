import React from 'react';
import Brands from '../../components/HomeComponents/Brands';
import styles from './Home.module.scss';
import Hero from "../../components/HomeComponents/Hero";
import NewArrivals from "../../components/HomeComponents/NewArrivals";
import HandiPicked from "../../components/HomeComponents/Handipicked";
import Cards from "../../components/HomeComponents/Cards";

const Home= () => {
    return (
        <div className={styles.container}>
            <Hero/>
            <NewArrivals  />  
            <HandiPicked id="handiPicked"/>
            <Brands id="brands"/>
            <Cards id="trendy"/>
        </div>
    );
}

export default Home;