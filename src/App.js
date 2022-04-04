import React from 'react'
import styles from './App.scss';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App() {

    return (
        <div className={styles.App}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
