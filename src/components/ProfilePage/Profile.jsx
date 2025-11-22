import React from "react";
import { MdLogin, MdLogout, MdOutlineDashboard, MdOutlineReviews } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile({ isOpen, onClose }) {
    const { isLoggedIn } = useSelector(state => state.auth);
    const user = useSelector((state) => state.profile);

    if (!isOpen) return null; // Modal hidden

    return (
        <div
            className=" absolute top-16 right-0 z-50"
            onClick={onClose}>
            <div
                className="bg-gray-100 p-3 w-50 relative shadow-sm"
                onClick={(e) => e.stopPropagation()} >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold">
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-2">Your Profile</h2>
                <p className="text-gray-600 text-center text-sm">
                    Welcome to your profile!</p>
                <div className="mx-auto mt-5 text-center">
                    <img
                        src={user.image || "https://via.placeholder.com/150"}
                        className="w-22 h-22 rounded-full mx-auto object-cover border border-green-600" />
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                </div>

                <div className="flex flex-col gap-3 text-center py-3">
                    <Link to='./editprofile' className="border border-gray-300 px-3 py-1 hover:bg-gray-100 rounded hover:scale-105 duration-300">
                        <span className="flex items-center gap-2"><TiEdit /> Edit Profile</span>
                    </Link>
                    <Link to='/admin' className="border border-gray-300 px-3 py-1 hover:bg-gray-100 rounded  hover:scale-105 duration-300">
                        <span className="flex items-center gap-2"><MdOutlineDashboard />
                            Dashboard</span>
                    </Link>
                    <Link to='/review' className="border border-gray-300 px-3 py-1 hover:bg-gray-100 rounded  hover:scale-105 duration-300">
                        <span className="flex items-center gap-2"><MdOutlineReviews />
                            Share Review</span>
                    </Link>

                    {isLoggedIn ? (
                        <Link to='/login'
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 hover:scale-105 duration-300 border border-gray-300 text-white rounded">
                            <span className="flex items-center gap-2"><MdLogout /> Logout</span>
                        </Link>
                    ) : (
                        <Link to="/login"
                            className="px-3 py-1 bg-green-500 hover:bg-green-600 hover:scale-105 duration-300 border border-gray-300 text-white rounded">
                            <span className="flex items-center gap-2"><MdLogin /> Login</span>
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
}
