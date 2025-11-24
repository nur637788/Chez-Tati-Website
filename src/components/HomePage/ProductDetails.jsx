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
        className="mb-4 text-pink-500 hover:underline">
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT - Product Image */}
        <img
          className="w-70 h-70 object-cover rounded-lg border border-gray-100 mx-auto"
          src={product?.thumbnail}
          alt={product.title}
        />

        {/* RIGHT - Product Info */}
        <div>
          <div className="flex gap-3">
            {/* Product ID */}
            <p className="text-gray-600">
              <b>Product ID:</b> #{product?.id}
            </p>
            {/* Stock */}
            <p
              className={` px-1 h-5 rounded text-white text-sm ${product?.stock > 50
                ? "bg-green-500"
                : product.stock > 20
                  ? "bg-orange-500"
                  : "bg-red-500"
                }`}>
              In Stock: {product?.stock}
            </p>
          </div>

          <h2 className="text-2xl font-bold">{product?.title}</h2>

          <p className="text-gray-600">
            <b>Brand:</b> {product?.brand}
          </p>

          <p className="text-gray-600">
            <b>Category:</b> {product?.category}
          </p>

          {/* Rating */}
          <p className="text-gray-600">
            <b>Rating:</b> {"⭐".repeat(product?.rating)}
          </p>

          {/* Price Section */}
          <div className="flex items-center gap-2 mt-1">
            <p className="line-through text-gray-400 text-lg">${product?.price}</p>
            <p className="text-2xl font-semibold text-amber-600">
              ${discountPrice}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4 leading-6">{product?.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
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

            <Link to='/allcheckout' className="bg-[#EA5326] text-white px-10 py-2 rounded-full hover:bg-amber-700 hover:scale-95 duration-300">
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
      <div className="mt-12 max-w-xl">
        <h2 className="font-bold text-xl mb-2">Customer Reviews</h2>
        {product?.reviews.map((review) => (
          <div key={review.index}
            className="bg-gray-50 p-2 border border-gray-300 rounded my-2">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-xl">{review.reviewerName}</h4>
              <p className="md:text-base text-[8px]">{review.date}</p>
            </div>
            <p className="text-gray-700">
              {"⭐".repeat(review.rating)}
            </p><hr className="text-gray-200 my-1" />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      {/* --------Product Return Policy:---------- */}
      <div className="flex flex-col bg-gray-50 rounded space-y-1 border border-gray-100 w-fit m-auto px-6 py-2 mt-5 hover:bg-gray-200">
        <p><b>Return Policy: </b>{product.returnPolicy}</p>
        <p><b>Minimum Order Quantity: </b>{product.minimumOrderQuantity}</p>
        <p><b>CreatedAt: </b>{product.meta.createdAt}</p>
        <p><b>UpdatedAt :</b>{product.meta.updatedAt}</p>
        <p><b>Barcode: </b>{product.meta.barcode}</p>
      </div>
    </div>
  );
}
