import React from 'react'
import MainCatalogPageContainer from "./pages/MainCatalogPage/MainCatalogPageContainer"
import {Navigate, Route, Routes} from "react-router"
import ItemPage from "./pages/ItemPage/ItemPage"
import Layout from "./Components/Layout/Layout";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Navigate to={'maincatalog'} replace/>}/>
                <Route path={':maincatalog/:id'} element={<ItemPage/>}/>
                <Route path={':maincatalog'} element={<MainCatalogPageContainer/>}/>
                <Route path={'*'} element={<Navigate to={'maincatalog'} replace/>}/>
            </Route>
        </Routes>
    );
}

export default App;
