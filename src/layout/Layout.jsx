import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import styles from './Layout.module.scss'

export default function({children}){
    return(
        
        <div className={styles["layout-container"]}>
            <Header />
            <main className={styles["layout-main"]}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}