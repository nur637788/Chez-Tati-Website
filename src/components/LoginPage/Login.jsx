import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Redux/authSlice";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Empty check
        if (!email || !password) {
            alert("Fill all fields!");
            return;
        }

        // Email validation
        if (!regex.test(email)) {
            alert("Enter a valid email!");
            return;
        }

        // Password length check
        if (password.length < 5) {
            alert("Password must be at least 5 characters!");
            return;
        }

        dispatch(login({ name: email }));
        setMessage(`Login successful! Welcome, ${email}`);
    };

    const handleLogout = () => {
        dispatch(logout());
        setMessage("Logged out successfully!");
        setEmail("");
        setPassword("");
    };

    // Auto remove message after 3 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="max-w-md mx-auto px-5 pb-5 bg-gray-50 rounded shadow-sm h-fit">
            <h1 className="text-2xl text-center font-bold py-4">Login Form</h1>

            {isLoggedIn ? (
                <div className="text-center space-y-4">
                    {message && <p className="text-green-600 font-semibold">{message}</p>}
                    <button
                        onClick={handleLogout}
                        className="w-fit px-10 bg-red-600 hover:bg-red-700 hover:scale-95 duration-300 text-white py-2 rounded cursor-pointer">
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <form onSubmit={handleLogin} className="space-y-4 w-75">
                        {message && <p className="text-green-600 font-semibold">{message}</p>}
                        <input
                            className="w-full border border-gray-300 p-2 rounded"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <div className="relative">
                            <input
                                className="w-full border border-gray-300 p-2 rounded "
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

                        <Link to="/forgetpass" className="flex items-end justify-end -mt-3 text-gray-700 hover:text-gray-900 font-medium">Forget Password</Link>

                        <button
                            type="submit"
                            className="w-full bg-[#EA5326] hover:bg-amber-700 hover:scale-95 duration-300 text-white py-2 rounded-full cursor-pointer">
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-5">
                        Don’t have account?{" "}
                        <Link to="/register" className="font-semibold text-blue-500 hover:text-blue-600">
                            Register
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
}
