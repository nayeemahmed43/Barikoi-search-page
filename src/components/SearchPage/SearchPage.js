import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchData } from '../../actions/index';
import ApiDataList from './ApiDataList';
import './SearchPage.css'

const SearchPage = () => {
    const dispatch = useDispatch()


    const onInputChange = (term) => {
        dispatch(fetchData(term));
    }
    return (
        <div style={{width:"50%"}}>
            <input onChange={e => onInputChange(e.target.value)} placeholder="Search Location"/>
            <ApiDataList ></ApiDataList>
        </div>
    );
};

export default SearchPage;