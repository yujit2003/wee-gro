"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import Product from "@/components/product";
import NavBar from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import bg from "../../image/policy.jpeg";

export default function Bidding() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        const { data } = await axios.get("https://weegro.onrender.com/api/products");
        console.log("Products fetched:", data.results);
        setProducts(data.results || []);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    // Optional cleanup function
    return () => {
      console.log("Cleanup on component unmount");
    };
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <NavBar />
      <main>
        {loading ? (
          <div className="flex justify-center items-center h-[100vh]">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-20 h-20 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mt-10 mb-8">
              <Image src={bg} alt="Startup" className="mx-auto" />
              <h1 className="text-3xl font-bold mt-4">HERE BELOW IS LIST OF ALL STARTUPS...</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center bg-white bg-opacity-80">
              {products.map((product, index) => (
                <div key={index} className="hover:translate-y-[-0.25rem] rounded-md flex flex-wrap bg-slate-700  min-h-[30vh] min-w-[40vw] md:min-w-[30vw] m-4 justify-center items-center">

                <Product key={product.id} product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );

  function handleBid(product) {
    // Implement the bid logic here, e.g., updating the product's valuation
    console.log("Bidding on:", product);
    // Example: increment the valuation
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, valuation: p.valuation + 1 } : p
    );
    setProducts(updatedProducts);
  }
}
