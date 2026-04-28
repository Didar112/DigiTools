

import { Suspense, useState } from 'react'
import './App.css'
import Herobanner from './Components/hero/Herobanner'
import Navbar from './Components/navbar/Navbar'
import Products from './Components/Products/Products'
import Statbanner from './Components/Statbanner/Statbanner'
import { ToastContainer } from 'react-toastify'
import Started from './Components/StartedSection/Started'


const producPromise = async() =>
  {
    const res = await fetch ("/productData.json")
    const pro = res.json()
    return pro;
  }


function App() {

  

  const prodData = producPromise();  

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Herobanner></Herobanner>
      <Statbanner></Statbanner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

      <Products prodData={prodData} ></Products>
      </Suspense>
      <Started></Started>
      
    </div>
   
   
  )
}

export default App
