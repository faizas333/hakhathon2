import React from "react";
import Image from "next/image";
import { Navbar } from "../component/Navbar";
import Footer from "../component/Footer";

const Homepage = () =>{

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-8">
        {/* Hero Banner */}
        <section className="text-center mb-12">
          <Image
            src="/girl.png"
            alt="Banner"
            className="w-full max-h-96 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold mt-6">Find Clothes That Match Your Style</h1>
          <p className="text-gray-600 mt-4">Discover 200+ brands and 30,000+ items.</p>
        </section>

        {/* Featured Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;