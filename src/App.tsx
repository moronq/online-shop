import React, {useState} from 'react'
import styles from './App.module.scss';
import Header from "./Components/Header/Header";
import MainCatalogContainer from "./Components/Body/MainCatalog/MainCatalogContainer";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router";
import ItemPage from "./Components/Body/ItemPage/ItemPage";

function App() {

    return (
        <div className={styles.App}>
            <Header/>
            <main className={styles.mainContent}>
                <Routes>
                    <Route path={'/:maincatalog/:id'} element={<ItemPage/>}/>
                    <Route path={'/'} element={<MainCatalogContainer/>}/>
                    <Route path={'/:maincatalog'} element={<MainCatalogContainer/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
