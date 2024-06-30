
import React from "react";
import Image from 'next/image'
import Bid from "../../image/bidding.jpeg";
import connect from "../../image/connect.png";
import Policy from "../../image/policy.jpeg";
import Header from "../../components/Header.jsx"
import Footer from "../../components/Footer.jsx"

export default async function Home() {
  return (
    <>
    <Header />
      <section id="title" className="coloured-section">
        <div className="container-fluid">
          <h1 className="big-heading">
            Elevating Your Business to new heights
          </h1>
        </div>
      </section>
      <section id="features" className="bg-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 ">
              <div className="flex items-center justify-center">

              <Image
                src={Bid}
                width={260}
                height={150}
                alt="Bidding"
                />
                </div>
              <h3 className="text-xl font-semibold mt-4">Direct Investing</h3>
              <p className="text-gray-600 mt-2">Investors using <i>Direct Investing</i> can directly invest in startups with the help of algorithmic confirmations. The system streamlines the process, ensuring that investors receive precise and timely validation before committing their funds to emerging ventures. This method enhances decision-making and simplifies the investment journey.</p>
            </div>
            <div className="text-center p-6">
            <div className="flex items-center justify-center">
              <Image
                src={connect}
                width={250}
                height={100}
                alt="Connect"
              />
              </div>
              <h3 className="text-xl font-semibold mt-4">Connect</h3>
              <p className="text-gray-600 mt-2">
              <i>Connect</i> allows startups to directly network and exchange resources, such as raw materials, reducing the reliance on middlemen. This platform fosters collaboration, lowers costs, and streamlines operations by enabling startups to support each other and build a more efficient supply chain.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex items-center justify-center">

              <Image
                src={Policy}
                width={500}
                height={200}
                alt="Policy"
                />
                </div>
              <i className="fa-solid fa-user-magnifying-glass fa-2x mb-4"></i>
              <h3 className="text-xl font-semibold mt-4">Policies</h3>
              <p className="text-gray-600 mt-2">
              Receive the latest policy updates for startups, web scraped from official government startup websites. Stay informed about new regulations, funding opportunities, and compliance requirements. This service ensures that startups remain compliant and can take advantage of the most recent support measures and incentives offered by the government.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
