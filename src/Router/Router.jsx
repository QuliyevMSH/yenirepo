import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Basket from '../Pages/Basket/Basket'
import DashBoard from '../Pages/DashBoard/DashBoard'
import Home from '../Pages/Home/Home'
import Wishlist from '../Pages/Wishlist/Wishlist'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/dashBoard' element={<DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router