import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ForgetPass() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleForgetPass = (e) => {
        e.preventDefault();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Email validation
        if (!regex.test(email)) {
            alert("Enter a valid email!");
            return;
        }
        setMessage(`Forget successful! Welcome to New Password`);
        setEmail("")
    }
    // Auto redirect login page after 2 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                navigate('/newpass')
            }, 2000);

            return () => clearTimeout(timer);
        }
    });

    return (
        <div className="max-w-md mx-auto px-5 pb-5 bg-gray-50 rounded shadow-sm">
            <h1 className="text-2xl text-center font-bold py-4">Forget Password</h1>
            <form onSubmit={handleForgetPass} className="space-y-4">
                <input
                    className="w-full border border-gray-300 p-2 rounded"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <button
                    type="submit"
                    className="w-full bg-[#EA5326] hover:bg-amber-700 text-white py-2 rounded-full cursor-pointer">
                    Submit
                </button>
            </form>
            {message && <p className="text-green-600 font-semibold mt-3">{message}</p>}

        </div>
    )
}

export default ForgetPass
