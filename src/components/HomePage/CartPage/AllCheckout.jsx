import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AllCheckout() {
    const { items, totalPrice, totalQuantity } = useSelector(state => state.cart);
    const [payment, setPayment] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate()
    const handleForm = (e) => {
        e.preventDefault();

        // VALIDATION
        if (!payment) {
            alert("Select Payment Method!");
            return;
        }
        if (name.length < 3) {
            alert("Name must be at least 3 characters!");
            return;
        }

        if (phone.length !== 11) {
            alert("Phone number must be 11 digits!");
            return;
        }

        if (address.length < 10) {
            alert("Address must be at least 10 characters!");
            return;
        }

        // ORDER OBJECT
        const order = {
            id: Date.now(),
            name,
            phone,
            address,
            payment,
            items,
            totalPrice,
            totalQuantity,
            date: new Date().toLocaleString()
        };

        // SAVE TO LOCALSTORAGE (ADMIN PAGE WILL READ THIS)
        const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
        oldOrders.push(order);
        localStorage.setItem("orders", JSON.stringify(oldOrders));

        alert("Order placed successfully!");

        // Clear form
        setPayment("");
        setName("");
        setPhone("");
        setAddress("");
        navigate('/cart')
    };

    return (
        <div className="w-2xl p-6 border my-5 rounded m-auto">
            <h1 className="text-xl md:text-2xl text-center font-bold pb-5">Checkout Form 🛄</h1>

            {/* Product Summary */}
            <div className="border p-4 rounded mb-6">
                <h2 className="text-xl font-bold mb-3">Order Summary:</h2>

                {items.map(item => (
                    <div key={item.id} className="flex justify-between mb-2 border-b pb-2">
                        <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">${item.total.toFixed(2)}</p>
                    </div>
                ))}

                <div className="flex justify-between mt-4 text-lg font-bold">
                    <p>Total ({totalQuantity} items)</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleForm} className="space-y-4">
                {/* ------Payment Method------- */}
                <b>Payment Method</b>
                <div className="space-x-2">
                    <input
                        type="radio"
                        id="CashDelivery"
                        name="payment"
                        required
                        value="Cash On Delivery"
                        onChange={(e) => setPayment(e.target.value)} />
                    <label htmlFor="CashDelivery">Cash on Delivery</label> <br />
                    <input
                        type="radio"
                        id="Bkash"
                        name="payment"
                        required
                        value="Bkash"
                        onChange={(e) => setPayment(e.target.value)} />
                    <label htmlFor="Bkash">Bkash</label> <br />
                    <input
                        type="radio"
                        id="Rocket"
                        name="payment"
                        required
                        value="Rocket"
                        onChange={(e) => setPayment(e.target.value)} />
                    <label htmlFor="Rocket">Rocket</label>
                </div>

                {/* ------- user info------- */}
                <div>
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                        type="number"
                        placeholder="01XXXXXXXXX"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Full Address</label>
                    <textarea
                        placeholder="House, Road, City"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#EA5326] hover:bg-amber-700 text-white py-2 rounded-full font-semibold cursor-pointer">
                    Confirm Order
                </button>
            </form>
        </div>
    );
}
