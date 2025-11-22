import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile({ isOpen, onClose }) {
    const { isLoggedIn } = useSelector(state => state.auth);


    if (!isOpen) return null; // Modal hidden

    return (
        <div
            className=" absolute top-16 right-0 z-50"
            onClick={onClose}>
            <div
                className="bg-gray-200 p-3 w-50 relative"
                onClick={(e) => e.stopPropagation()} >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold">
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-2">Your Profile</h2>
                <p className="text-gray-600 mb-4">
                    Welcome to your profile section!
                </p>
                <div className="flex flex-col gap-5 text-center py-3">
                    <Link to='/admin' className="bg-amber-600 hover:bg-amber-700 px-5 py-1 border border-gray-300 rounded text-white  hover:scale-105 duration-300">Dasboard</Link>
             
                    {isLoggedIn ? (
                        <Link to='/login'
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 hover:scale-105 duration-300 border border-gray-300 text-white rounded">
                            Logout
                        </Link>
                    ) : (
                        <Link to="/login"
                            className="px-3 py-1 bg-green-500 hover:bg-green-600 hover:scale-105 duration-300 border border-gray-300 text-white rounded">
                            Login
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
}
