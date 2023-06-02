import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { Route, Routes } from 'react-router-dom'
import HomeSearch from '../components/HomeSearch'
import SearchResult from '../components/SearchResult'
import More from '../components/SearchResult/more'
const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomeSearch />} />
                <Route path="searchresult" element={<SearchResult />} />
                <Route path='searchresult/more' element={<More />} />
            </Routes>
        </>
    )
}
export default Root
