import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
    const [show, setShow] = useState(false);
    const [reShow, setReShow] = useState(false);
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Email Regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Empty field check
        if (!name || !email || !password || !rePassword) {
            alert("Please fill all fields!");
            return;
        }

        // Email validation
        if (!regex.test(email)) {
            alert("Please enter a valid email!");
            return;
        }

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
        setMessage(`Register successful! Welcome, ${name}`);
        setName("")
        setEmail("")
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
        <div className="max-w-md mx-auto px-5 pb-5 bg-gray-50 rounded shadow-sm">
            <h1 className="text-2xl text-center font-bold py-4">Create Account</h1>

            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    className="w-full border border-gray-300 p-2 rounded"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />

                <input
                    className="w-full border border-gray-300 p-2 rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <div className="relative">
                    <input
                        className="w-full border border-gray-300 p-2 rounded"
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        value={password}
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
                        type={reShow ? "text" : "password"}
                        placeholder="Re-Password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required />
                    {/* Eye Icon */}
                    <button
                        type="button"
                        onClick={() => setReShow(!reShow)}
                        className="absolute right-3 top-2.5 text-gray-600 hover:text-pink-500">
                        {reShow ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="checkbox" required />
                    <label htmlFor="checkbox">Accept all</label>
                    <Link to="/privacypolicy" className=" text-blue-900 hover:text-blue-800 font-medium">Privacy policy</Link>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#EA5326] hover:bg-amber-700 hover:scale-95 duration-300 text-white py-2 rounded-full cursor-pointer">
                    Register
                </button>
            </form>

            <p className="text-center mt-5">
                Already have an account?{" "}
                <Link to='/login' className="font-semibold text-blue-500 hover:text-blue-600">
                    Login
                </Link>
            </p>

            {message && <p className="text-green-600 font-semibold mt-3">{message}</p>}
        </div>
    );
}
