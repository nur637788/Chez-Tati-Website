import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function NewPass() {
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);

    const navigate = useNavigate()
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
        setMessage(`New Password Set Successful!✅ `);
        setPassword("")
        setRePassword("")
    };
    // Auto redirect login page after 2 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                navigate('/login')
            }, 2000);

            return () => clearTimeout(timer);
        }
    });

    return (
        <div className="max-w-md mx-auto px-5 pb-5 bg-gray-50 rounded shadow-sm ">
            <h1 className="text-2xl text-center font-bold py-4">Set New Password</h1>

            <form onSubmit={handleNewPass} className="space-y-4 w-75">
                <div className="relative">
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type={show ? "text" : "password"}
                        value={password}
                        placeholder="New password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    {/* Eye Icon */}
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute right-3 top-2.5 text-gray-600 hover:text-pink-500">
                        {show ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <div className="relative">
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type={newShow ? "text" : "password"}
                        placeholder="Confirm new password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required />
                    <button
                        type="button"
                        onClick={() => setNewShow(!newShow)}
                        className="absolute right-3 top-2.5 text-gray-600 hover:text-pink-500">
                        {newShow ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#EA5326] hover:bg-amber-700 text-white py-2 rounded-full cursor-pointer">
                    Create Account
                </button>
            </form>

            {message && <p className="text-green-600 font-semibold mt-3">{message}</p>}
        </div>
    );
}
