import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import HyundaiSubscription from './HyundaiSubscription'
import Login from './Login'
import MahindraSubscription from './MahindraSubscription'
import SignUp from './SignUp'

function AllRoutes() {
  return (

    <>
    <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/hyundai' element={<HyundaiSubscription/>}></Route>
        <Route path='/mahindra' element={<MahindraSubscription/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        


    </Routes>



    </>

  )
}

export default AllRoutes