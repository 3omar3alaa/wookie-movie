import React from 'react'
import { Route, Switch, Redirect, Routes, Navigate } from 'react-router-dom'

import App from '../App'
import MovieList from '../Components/Home/home';
import MovieDetail from '../Components/Detail/detail';

const AppRoutes = () => (
    <>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/movies' element={<App />} />
            <Route path='/movie/:slug' element={<MovieDetail />} />
        </Routes>
    </>
)

export default AppRoutes