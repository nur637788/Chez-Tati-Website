import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../../Redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

function NewProducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorites);
  const navigate = useNavigate();

  //  JSON data 
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(160, 178)))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  if (!products || products.length == 0)
    return <p className="text-center text-red-700 mt-10">Loading...</p>;

  return (
    <section className="w-full">
      <div className="flex justify-between ">
        <p className="text-xl font-bold mb-2">New Products</p>
        <p className="text-xl font-bold mb-2">Result: {products.length} </p>
      </div>
      {/* Product Grid Area */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((pro) => {
          const isFav = items.some((fav) => fav.id === pro.id);
          return (
            <div
              key={pro.id}
              className="bg-gray-100 rounded-2xl border border-gray-300 cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/product/${pro?.id}`)}>
              <div className="w-full h-50 ">
                <img
                  className="w-full h-full object-cover rounded-t-2xl"
                  src={pro.thumbnail}
                  alt={pro.title} />
              </div>

              <div className="p-2">
                <p>{pro.title.slice(0, 15)}</p>
                <div className="flex justify-between items-center">
                  <p>${pro.price}</p>

                  {/* ❤️ Favorite Button */}
                  <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(toggleFavorite(pro));
                  }} className="hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="bg-black w-6 h-6 rounded-full flex justify-center items-center">
                      {isFav ? <IoMdHeart className="text-red-600" /> : <IoIosHeartEmpty className="text-white" />}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default NewProducts;
