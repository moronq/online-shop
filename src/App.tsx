import React from 'react'
import MainCatalogPageContainer from "./pages/MainCatalogPage/MainCatalogPageContainer"
import {Route, Routes} from "react-router"
import ItemPage from "./pages/ItemPage/ItemPage"
import Layout from "./Components/Layout/Layout";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<MainCatalogPageContainer/>}/>
                <Route path={'/:maincatalog/:id'} element={<ItemPage/>}/>
                <Route path={'/:maincatalog'} element={<MainCatalogPageContainer/>}/>
            </Route>
        </Routes>
    );
}

export default App;
