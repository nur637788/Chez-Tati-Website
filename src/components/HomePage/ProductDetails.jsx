import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { increase, decrease, addToCart } from "../../Redux/CartSlice"
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()



  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return <p className="text-center text-red-700 mt-10">Loading...</p>;

  // ⭐ Discount Price Calculation
  const discountPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-pink-500 hover:underline"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT - Product Image */}
        <img
          className="w-72 h-72 object-cover rounded-lg border mx-auto"
          src={product.thumbnail}
          alt={product.title}
        />

        {/* RIGHT - Product Info */}
        <div>
          <p className="text-gray-600">
            <b>Product ID:</b> #{product.id}
          </p>

          <h2 className="text-2xl font-bold">{product.title}</h2>

          <p className="text-gray-600">
            <b>Brand:</b> {product.brand}
          </p>

          <p className="text-gray-600">
            <b>Category:</b> {product.category}
          </p>

          {/* Rating */}
          <p className="text-gray-900">
            <b>Rating:</b> {product.rating}⭐
          </p>

          {/* Price Section */}
          <div className="flex items-center gap-4 mt-3">
            <p className="line-through text-gray-400 text-lg">${product.price}</p>
            <p className="text-2xl font-semibold text-amber-600">
              ${discountPrice}
            </p>
          </div>

          {/* Stock */}
          <p
            className={`mt-2 px-2 w-fit rounded text-white ${product.stock > 50
              ? "bg-green-500"
              : product.stock > 20
                ? "bg-orange-500"
                : "bg-red-500"
              }`}
          >
            In Stock: {product.stock}
          </p>

          {/* Description */}
          <p className="text-gray-700 mt-4 leading-6">{product.description}</p>

          {/* Buttons */}
          <div className="flex gap-5 mt-6">
            {/* quantity Plus Minus buttons */}
            <div className="flex items-center gap-3 bg-gray-100 px-2 rounded-full border border-gray-300">
              <button
                onClick={() => dispatch(decrease(product.id))}
                className="w-7 h-7 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer" >
                -
              </button>

              <span className="text-lg font-semibold">{product.quantity}</span>

              <button
                onClick={() => dispatch(increase(product.id))}
                className="w-7 h-7 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer">
                +
              </button>
            </div>

            <Link to='/allcheckout' className="bg-amber-600 text-white px-10 py-2 rounded-full hover:bg-amber-700 hover:scale-95 duration-300">
              Checkout
            </Link>

            <button onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(addToCart(product));
            }}>
              <Link className='bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full border border-red-100'>
                <FiShoppingCart />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ Customer Reviews */}
      <div className="mt-12">
        <h2 className="font-bold text-xl mb-5">Customer Reviews</h2>

        <div className="bg-white p-5 shadow-sm max-w-2xl rounded-md hover:scale-95 duration-300">
          <h4 className="font-semibold">{product.title} Review</h4>
          <p className="text-gray-700 mt-2">
            ⭐ {product.rating} / 5 based on customer feedback.
          </p>
        </div>
      </div>
    </div>
  );
}
