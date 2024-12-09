import React from 'react'
import { Navbar } from './component/Navbar'
import Footer from './component/Footer'
import Link from 'next/link'

const page = () => {
  return (
    <div>
    <Navbar />
  <div className='flex bg-white gap-3 text-xl text-slate-400 justify-center item-center'>
  
      <Link href="/homepage">H0ME </Link>
      <Link href="/product">PRODUCT </Link>
      <Link href="/catagory">CATEGORY </Link>
      <Link href="/cart">CART </Link>
      </div>

      

      




    <Footer />
    </div>
  )
}

export default page