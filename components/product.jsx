import React from 'react';
import Link from 'next/link';
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  const options = {
    value: product.reviews[0].rating,
    edit: false,
    readOnly: true,
    precision: 0.5,

  };
  console.log(product, "yujit");

  return (
    <Link href={`/details/${product._id}`}>
      <div className='flex-col justify-center items-center text-white'>

        <p className="text-lg md:text-xl text-white font-semibold mb-2">{product.name}</p>
        <div className="flex flex-col items-center">
          {/* Uncomment the line below if you want to include the rating stars */}
          <ReactStars {...options} />
          <span className="text-sm  mt-1">{`(${product.numOfReviews} reviews)`}</span>
          <div className="mt-2 text-white">{`Efficiency: ${product.efficiency}`}</div>
          <div className="mt-1 ">{`Valuation: ${product.valuation} Cr`}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
