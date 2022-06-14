import React from 'react';
import {useSearchParams} from "react-router-dom";

export const UseSearch = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')

    return {setSearchParams, searchQuery}
};