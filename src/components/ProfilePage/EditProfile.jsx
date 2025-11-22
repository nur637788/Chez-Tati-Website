import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Redux/profileSlice";
import ChangePass from "./ChangePass";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.profile);
    const [preview, setPreview] = useState(user.image);

    const handleInput = (e) => {
        dispatch(updateProfile({ [e.target.name]: e.target.value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setPreview(imgUrl);
        dispatch(updateProfile({ image: imgUrl }));
    };

    const handleSaved = (e) => {
        e.preventDefault();

        // Validation
        // if (!user.name || user.name.trim() === "") {
        //     alert("Please enter your name!");
        //     return;
        // }

        if (!user.email || user.email.trim() === "") {
            alert("Please enter your email!");
            return;
        }

        if (!user.phone || user.phone.trim() === "") {
            alert("Please enter your phone number!");
            return;
        }
        setMessage("Profile Updated Successfully! 🎉")
    };

    // Auto redirect login page after 2 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                navigate('/')
            }, 4000);
            return () => clearTimeout(timer);
        }
    });

    return (
        <div className="w-full">
            <div className="w-full mx-auto bg-white shadow rounded-lg mb-10">
                <h2 className="text-2xl font-bold bg-gray-50 py-1 shadow px-2">Account Setting</h2>
                <form onSubmit={handleSaved} className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 p-5">
                    {/* Image */}
                    <div className="flex flex-col items-center">
                        <img
                            src={preview || "https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3"}
                            className="w-40 h-40 rounded-full border-2 border-blue-500 object-cover"
                        />

                        <label className="mt-3 border-2 border-[#EA5326] px-4 py-1 text-[#EA5326] rounded-full cursor-pointer text-sm">
                            Upload Photo
                            <input type="file" className="hidden" onChange={handleImageUpload} />
                        </label>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-2">
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Deo"
                                required
                                value={user.name}
                                onChange={handleInput}
                                className="w-full border border-gray-300 px-2 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                required
                                value={user.email}
                                onChange={handleInput}
                                className="w-full border border-gray-300 px-2 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label>Phone</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="01xxxxxxxxx"
                                required
                                value={user.phone}
                                onChange={handleInput}
                                className="w-full border border-gray-300 px-2 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label>Bio</label>
                            <textarea
                                name="bio"
                                value={user.bio}
                                placeholder="Set your hobbys"
                                required
                                onChange={handleInput}
                                rows="3"
                                className="w-full border border-gray-300 px-2 py-2 rounded"
                            ></textarea>
                        </div>

                        <button type="submit" className="bg-[#EA5326] text-white px-4 py-1 rounded-full hover:bg-amber-700 text-sm cursor-pointer">
                            Save Changes
                        </button>
                    </div>
                </form>
                {message && <p className="text-green-600 font-semibold mt-1 p-2">{message}</p>}
            </div>
            <ChangePass />
        </div>
    );
}
