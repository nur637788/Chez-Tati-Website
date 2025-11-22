import { useState } from "react";
import AllCheckoutInfo from "./AllCheckoutInfo";
import SingleCheckoutInfo from './SingleCheckoutInfo'
export default function Admin() {
    // 🔐 Fixed credentials (Admin access)
    const ADMIN_USERNAME = "admin@";
    const ADMIN_PASSWORD = "admin1234";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    // ✅ Admin login
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            alert("✅ Welcome Admin!");
            setLoggedIn(true);
        } else {
            alert("❌ Wrong username or password!");
        }
        setUsername("");
        setPassword("");
    };

    // ✅ Admin logout
    const handleLogout = () => {
        setLoggedIn(false);
    };

    // 🔒 Login না থাকলে login form দেখাও
    if (!loggedIn) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen -mt-20">
                <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
                <form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-3 w-72 bg-white p-5 rounded shadow">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border px-3 py-2 rounded"
                        required />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border px-3 py-2 rounded"
                        required />
                    <button
                        type="submit"
                        className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
                        Login
                    </button>
                </form>
            </div>
        );
    }
    // Admin Login korar por dekhabe
    return (
        <div>
            <AllCheckoutInfo />
            <SingleCheckoutInfo />
            {/* LogOut Button */}
            <button
                className="my-10 block mx-auto bg-pink-700 text-white px-6 py-2 rounded hover:bg-pink-800"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )


}
