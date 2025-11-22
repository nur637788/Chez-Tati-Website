import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePass() {
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [crShow, setCrShow] = useState("")

    const navigate = useNavigate()
    const [crePassword, setCrePassword] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [message, setMessage] = useState("");

    const handleNewPass = (e) => {
        e.preventDefault();

        // Password length check
        if (password.length < 5) {
            alert("Password must be at least 5 characters long!");
            return;
        }

        // Password match check
        if (password !== rePassword) {
            alert("Password doesn't match!");
            return;
        }

        // Success and input empty
        setMessage(`Successfully Change Your Password!✅ `);
        setCrePassword("")
        setPassword("")
        setRePassword("")
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
        <div className="w-full mx-auto bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold bg-gray-50 py-1 shadow px-2">Change Password</h2>

            <form onSubmit={handleNewPass} className="space-y-3 p-5">
                <div className="relative">
                    <label>Current Password</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type={crShow ? "text" : "password"}
                        value={crePassword}
                        placeholder="Password"
                        onChange={(e) => setCrePassword(e.target.value)}
                        required />
                    {/* Eye Icon */}
                    <button
                        type="button"
                        onClick={() => setCrShow(!crShow)}
                        className="absolute right-3 top-9 text-gray-600 hover:text-pink-500">
                        {crShow ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <div className="relative">
                    <label htmlFor="">New Password</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type={show ? "text" : "password"}
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    {/* Eye Icon */}
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute right-3 top-9 text-gray-600 hover:text-pink-500">
                        {show ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <div className="relative">
                    <label htmlFor="">Confirm Password</label>
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type={newShow ? "text" : "password"}
                        placeholder="Password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required />
                    <button
                        type="button"
                        onClick={() => setNewShow(!newShow)}
                        className="absolute right-3 top-9 text-gray-600 hover:text-pink-500">
                        {newShow ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-fit bg-[#EA5326] hover:bg-amber-700 text-white py-1 px-4 rounded-full cursor-pointer text-sm">
                    Save Changes
                </button>
            </form>
            {message && <p className="text-green-600 font-semibold mt-1 p-2">{message}</p>}
        </div>
    );
}
