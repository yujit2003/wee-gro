import React from "react";
import playStore from "../image/playstore.png";
import appStore from "../image/Appstore.png";
import insta from "../image/instagram.png";
import linked from "../image/linkedin.png";
import github from "../image/github.png";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-2 flex justify-between items-center">
      <div className=" flex-col items-center w-1/5 space-y-4 md:flex">
        <h4 className="text-base md:text-lg font-roboto">DOWNLOAD OUR APP</h4>
        <p className="text-center text-base font-sans">Download App for Android and IOS mobile phone</p>
        <div className="space-y-4">
          <Image
                src={playStore}
                width={200}
                height={200}
                alt="Bidding"
                />
          <Image
                src={appStore}
                width={200}
                height={150}
                alt="Bidding"
                />
        </div>
      </div>

      <div className="text-center w-2/5 md:w-3/5 space-y-4">
        <h1 className="text-3xl font-roboto text-blue-500">WEEGRO</h1>
        <p className="mx-auto max-w-4/5 font-sans text-xs md:text-lg">Elevating Your Business to new heights</p>
        <p className="text-base font-sans">Copyrights 2021 &copy; weegro</p>
      </div>

      <div className="flex flex-col items-center w-1/5 space-y-4 mr-6">
        <h4 className="text-lg font-roboto underline">Follow Us</h4>
        <a href="http://instagram.com/yujit_2003" className="flex items-center space-x-2 text-xs md:text-base transition duration-300 hover:text-red-600">
          <Image
                src={insta}
                width={20}
                height={10}
                alt="Bidding"
                />
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/yujit-yadav-7a6197225/" className="flex items-center space-x-2 text-xs md:text-base transition duration-300 hover:text-red-600">
          <Image
                src={linked}
                width={20}
                height={10}
                alt="Bidding"
                />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/yujit2003" className="flex items-center space-x-2 text-xs md:text-base transition duration-300 hover:text-red-600">
          <Image
                src={github}
                width={20}
                height={10}
                alt="Bidding"
                />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;


