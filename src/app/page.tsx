import React from 'react'
import Link from 'next/link'
import { Navbar } from './component/Navbar'
import Footer from './component/Footer'

export default function page()  {
  return (
    
    <div>
  <Navbar />
  <div className='flex gap-4 justify-center align-center text-bold bg-slate-50'>
  <Link href="/shop">Shop</Link>
  <Link href="/cart">Cart</Link>
  <Link href="/product">Product</Link>
  </div>
  <Footer />
  </div>
 )
}
