import React, {useEffect} from 'react'
import styles from './App.scss';
import Header from "./Components/Header/Header";
import cn from "classnames"
import Body from "./Components/Body/Body";

function App() {

    return (
        <div className={styles.App}>
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
