import React from 'react'
import styles from './App.scss';
import Header from "./Components/Header/Header";
import cn from "classnames"

function App() {
  return (
    <div className={styles.App}>
      <Header/>
    </div>
  );
}

export default App;
