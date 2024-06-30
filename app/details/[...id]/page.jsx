"use client";
import React, { Fragment, useEffect, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Detailimage from "../../../image/detail.jpg";
import Detailimage2 from "../../../image/main.jpeg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";

const Page = ({ params }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [watchList, setWatchList] = useState([]);
  const [user, setUser] = useState({});
  const [inWatchlist, setInWatchlist] = useState(false);
  
  const email = session?.user?.email;

  const fetchProduct = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://weegro.onrender.com/api/product/${params.id}`);
      setProduct(data.product || {});
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(true);
    }
  }, [params.id]);

  const fetchUser = useCallback(async () => {
    if (!email) return;
    try {
      const res = await fetch(`/api/fetchdata?email=${email}`);
      const data = await res.json();
      if (res.ok && data.user) {
        setUser(data.user);
        setWatchList(data.user.watchList || []);
        setInWatchlist(data.user.watchList?.includes(product.name));
      } else {
        console.error("Failed to fetch user details:", data.error);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }, [email, product.name]);

  useEffect(() => {
    fetchUser();
    fetchProduct();
  }, [fetchUser, fetchProduct]);

  useEffect(() => {
    if (user?.watchList && product.name) {
      setInWatchlist(user.watchList.includes(product.name));
    }
  }, [user, product]);

  const addToWatchlist = async () => {
    try {
      const updatedWatchList = [...watchList, product.name];
      const res = await fetch("/api/watchList", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, watchList: updatedWatchList }),
      });
      if (res.ok) {
        setInWatchlist(true);
        fetchUser();
      } else {
        console.error("Failed to update watchlist.");
      }
    } catch (error) {
      console.error("Error during watchList adding: ", error);
    }
  };

  const removeFromWatchlist = async () => {
    try {
      const updatedWatchList = watchList.filter(item => item !== product.name);
      const res = await fetch("/api/watchList", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, watchList: updatedWatchList }),
      });
      if (res.ok) {
        setInWatchlist(false);
        fetchUser();
      } else {
        console.error("Failed to update watchlist.");
      }
    } catch (error) {
      console.error("Error during watchList removal: ", error);
    }
  };

  return (
    <Fragment>
      <div className="z-30">
        <Header />
      </div>
      <div className="z-0 bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${Detailimage2.src})` }}>
        <div className="backdrop-filter backdrop-blur-lg bg-opacity-15 md:w-5/6 p-6 md:p-24 box-border flex items-center justify-center mx-auto rounded-lg shadow-lg">
          {loading ? (
            <div role="status" className="flex h-[100vh] items-center justify-center">
              <svg
                aria-hidden="true"
                className="w-10 h-10 md:w-20 md:h-20 text-gray-200 animate-spin fill-blue-600"
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
          ) : (
            <div className="min-h-[110vh] md:h-screen w-full flex flex-col justify-evenly items-center md:p-6 box-border border border-gray-400 bg-white">
              <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-gray-700 font-semibold text-lg md:text-3xl">Startup Name: {product.name}</h2>
                <p className="text-gray-500 text-xs">Startup ID # {product._id}</p>
              </div>
              <div className="flex text-gray-900 font-medium text-sm md:text-xl">
                Category: <p className="text-gray-600 ml-1">{product.category}</p>
              </div>
              <div className="flex justify-start items-center border-t border-b border-gray-300 w-full md:w-3/5 py-4">
                {/* Uncomment below if you want to include the rating stars */}
              </div>
              <br />
              <div className="flex flex-wrap items-start justify-start w-full">
                <Image src={Detailimage} alt="connect" width={120} height={50} className="hidden md:block" />
                <div className="flex flex-col justify-start w-full md:w-3/5 ml-0 md:ml-8">
                  <h4 className="md:text-lg text-sm">{`Startup Valuation -> ${product.valuation} USD`}</h4>
                  <h4 className="md:text-lg text-sm">{`Startup Funding Rounds -> ${product.funding_rounds}`}</h4>
                  <h4 className="md:text-lg text-sm">{`First Funding at: -> ${product.age_first_funding} yrs`}</h4>
                  <h4 className="md:text-lg text-sm pb-6">{`Last Funding at: -> ${product.age_last_funding} yrs`}</h4>
                  <div className="uppercase from-green-100 bg-clip-text text-transparent animate-textclip font-extrabold italic">
                    {product.efficiency ? (
                      <p className="text-green-500">{`Startup Efficiency predicted from model -> ${product.efficiency}. You have a higher chance to generate profit from this startup.`}</p>
                    ) : (
                      <p className="text-red-500">{`Startup Efficiency predicted from model -> ${product.efficiency}. You have a higher chance to generate loss from this startup.`}</p>
                    )}
                  </div>
                  <br />
                </div>
                <div className="block overflow-auto border border-gray-400 bg-teal-200 rounded-md mt-4 hover:translate-y-[-0.25rem] hover:bg-teal-300 m-4 p-4">
                  {product.numOfReviews} Reviews
                  {product.reviews &&
                    product.reviews.map((item, i) => (
                      <div key={i} className="mb-4">
                        <p>Name: {item.name}</p>
                        <p>Comment: {item.comment}</p>
                      </div>
                    ))}
                </div>
                <button
                  variant="outlined"
                  style={{
                    width: "100%",
                    height: 40,
                    backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
                  }}
                  onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
                  className="m-2"
                >
                  {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Page;
