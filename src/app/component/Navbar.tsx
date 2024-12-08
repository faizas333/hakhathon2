import React from "react";
import { CiHeart, CiSearch} from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";


export const Navbar =()=> {
  return ( 
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
        <div className='bg-black text-white text-sm flex justify-between items-center px-8 w-full '>
            <div className='text-center flex-1'>
            Sign up get 20% off to you first oder. 
            <a href='#' className='underline hover-text-salate-300'>Sign up Now</a>
        </div>
        <div className="flex items-center gap-[2px]">
            <div className="text-white text-sm font-normal leading-[21px]">
                English
            </div>
            <MdArrowDropDown className="text-white text-3xl" />
        </div>
       </div>
       <div className="flex justify-between items-center px-8 py-4 ">
        <h1 className="text-3xl font-bold text-black px-16">SHOP.CO</h1>
        <nav className="hidden md:flex space-x-8 items-center">
         <a href="#"className="text-salate-600 hover:text-black underline">Shop</a>   
         <a href="#"className="text-salate-600 hover:text-black ">On Sale</a>   
         <a href="#"className="text-salate-600 hover:text-black ">New Arrival</a>   
         <a href="#"className="text-salate-600 hover:text-black ">Brand</a>   
    </nav>
    
    {/* search icone*/}
     <div className="flex items-center space-x-6">
        <div className=" hidden lg:flex items-center bg-slate-100 rounded-md px-3  py-2 ">
            <input type="text"
            placeholder="Search for product" className="bg-slate-100 outline-none text-sm"/>
            <CiSearch />
            </div>
     </div>
       <CiHeart/>
       <CiShoppingCart />
      </div>
        </header>

         
    )
}
