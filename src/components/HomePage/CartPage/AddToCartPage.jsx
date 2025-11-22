import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increase, decrease } from "../../../Redux/CartSlice";
import { setSelectedProduct } from "../../../Redux/CartSlice";

import { Link } from "react-router-dom";

export default function Cart() {
    const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="py-5 px-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

            {items.length === 0 ? (
                <p className="text-lg">Cart is Empty 📪</p>
            ) : (
                <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {items.map(item => (
                        <div key={item.id} className="flex flex-col gap-4  justify-between p-4 border border-gray-300 rounded relative shadow-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <img src={item.thumbnail} className="w-20 h-20 rounded" alt={item.title} />
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p>${item?.total ? item.total.toFixed(2) : '0.00'}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="absolute top-2 right-2 text-md hover:scale-105 duration-300 cursor-pointer">
                                    ❌
                                </button>
                            </div>

                            <div className="flex justify-between gap-5">
                                {/* quantity Plus Minus buttons */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => dispatch(decrease(item.id))}
                                        className="px-3 py-1 bg-gray-300 rounded cursor-pointer" >
                                        -
                                    </button>

                                    <span className="text-lg font-semibold">{item.quantity}</span>

                                    <button
                                        onClick={() => dispatch(increase(item.id))}
                                        className="px-3 py-1 bg-gray-300 rounded cursor-pointer">
                                        +
                                    </button>
                                </div>

                                {/* Product Checkout button */}
                                <div>
                                    <Link to="/singlecheckout">
                                        <button
                                            onClick={() => dispatch(setSelectedProduct(item))}
                                            className="px-4 py-1 bg-[#EA5326] hover:bg-amber-700 text-white rounded-full cursor-pointer">
                                            Checkout🛍️
                                        </button>
                                    </Link>
                                </div>
                                {/* Product Remove button */}
                            </div>
                        </div>
                    ))}

                    {/* All Checkout button */}
                    <div className="text-right mt-6 border-t pt-3 space-y-2">
                        <h2 className="text-xl font-bold">Total Items: {totalQuantity}</h2>
                        <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
                        <Link to="/allcheckout">
                            <button className="mt-2 bg-green-600 hover:bg-green-700 hover:scale-95 duration-300 text-white px-5 py-2 rounded-full cursor-pointer">
                                Checkout All 🛍️
                            </button>
                        </Link>
                    </div>

                </div>
            )}
        </div>
    );
}
