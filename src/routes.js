import React from 'react'

import {Routes , Route} from 'react-router-dom'
import Redirect from './pages/components/Redirect.js'
import { Error404 ,Cart ,Home ,Login ,ProductListing ,ProductPage ,Wishlist, User, SignUp} from './pages/index.js'

const RoutesHolder = () =>{
    return(
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Redirect path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path={`/products`} element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Redirect path="/user" element={<User />} />
            </Routes>
        </div>
    )
}
export default RoutesHolder