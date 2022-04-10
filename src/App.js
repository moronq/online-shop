import React from 'react'
import styles from './App.module.scss';
import Header from "./Components/Header/Header";
import MainCatalog from "./Components/Body/MainCatalog/MainCatalog";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router";

function App() {

    return (
        <div className={styles.App}>
            <Header/>
            <main className={styles.mainContent}>
                <Routes>
                    <Route path={'/'} element={<MainCatalog/>}/>
                    <Route path={'maincatalog'} element={<MainCatalog/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
