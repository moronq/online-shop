import React from 'react';
import styles from "../../App.module.scss";
import Header from "../Header/Header";
import {Outlet} from "react-router";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className={styles.App}>
            <Header/>
            <main className={styles.mainContent}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;