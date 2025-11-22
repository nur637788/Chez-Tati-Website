import React, { useEffect, useState } from "react";

export default function AllCheckoutInfo() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("orders"));
        setOrders(data || []);
    }, []);

    // DELETE ORDER
    const deleteOrder = (id) => {
        if (!confirm("Are you sure you want to delete this order?")) return;

        const filtered = orders.filter(order => order.id !== id);

        localStorage.setItem("orders", JSON.stringify(filtered));
        setOrders(filtered);

        alert("Order deleted successfully!");
    };

    return (
        <div className="mx-5 md:mx-10">
            <h1 className="text-2xl text-center font-bold mb-4">Multiple Orders Info 🗂</h1>

            {orders.length === 0 ? (
                <p className="text-center text-red-500">No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="border p-4 rounded mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <h3 className="font-bold">User info:</h3>
                            <h2><b>OrderID:</b> #{order.id}</h2>
                            <p><b>Payment: </b> {order.payment} </p>
                            <p><b>Name:</b> {order.name}</p>
                            <p><b>Phone:</b> {order.phone}</p>
                            <p><b>Address:</b> {order.address}</p>
                            <p><b>Date:</b> {order.date}</p>
                        </div>

                        <div>
                            <h3 className="font-bold">Products info:</h3>
                            {order.items && (
                                <ul className="list-disc ml-6">
                                    {order.items.map(p => (
                                        <li key={p.id}>
                                            {p.title} (x{p.quantity}) - ${p.total.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <button onClick={() => deleteOrder(order.id)}
                                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
                                Delete Order
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
