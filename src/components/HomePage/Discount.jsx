import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Discount() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //  JSON data 
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(80, 94)))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  if (!products)
    return <p className="text-center text-red-700 mt-10">Loading...</p>;

  return (
    <section className="w-full">
      <h4 className="text-2xl font-bold mb-2">Discount Products</h4>

      {/* Product Grid Area */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((pro) => (
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
                <button >
                  <img className="w-5 h-5" src="/icons/love-icon.png" alt="Heart-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Discount;
