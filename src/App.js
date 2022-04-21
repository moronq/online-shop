import React, {useState} from 'react'
import styles from './App.module.scss';
import Header from "./Components/Header/Header";
import MainCatalog from "./Components/Body/MainCatalog/MainCatalog";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from "react-router";
import ItemPage from "./Components/Body/ItemPage/ItemPage";



function App() {

    let[searchValue, setSearchValue] = useState('')

    return (
        <div className={styles.App}>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <main className={styles.mainContent}>
                <Routes>
                    <Route path={'itempage/:id'} element={<ItemPage/>}/>
                    <Route path={'/'} element={<MainCatalog searchValue={searchValue}/>}/>
                    <Route path={'maincatalog'} element={<MainCatalog/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
