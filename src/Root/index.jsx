import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { Route, Routes } from 'react-router-dom'
import HomeSearch from '../components/HomeSearch'
import SearchResult from '../components/SearchResult'
import SearchResultTwo from '../components/SearchResultTwo'
import More from '../components/SearchResult/more'
import MoreTwo from '../components/SearchResultTwo/MoreTwo'
const Root = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomeSearch />} />
                <Route path="searchresult" element={<SearchResult />} />
                <Route path="searchresulttwo" element={<SearchResultTwo />} />
                <Route path='searchresult/more' element={<More />} />
                <Route path='searchresulttwo/more' element={<MoreTwo />} />
            </Routes>
            <Footer />
        </>
    )
}
export default Root
