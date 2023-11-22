import React from 'react'
import {BrowserRouter,  Routes, Route} from "react-router-dom"
import Navbar from './Layout/Navbar'
import NewUser from './pages/NewUser'
import AllUser from './pages/AllUser'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='New' element= {<NewUser/>} />
      <Route path='All' element= {<AllUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App