import React, { useState } from "react";

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!name.trim()) {
            alert("Please enter your name!");
            return;
        }
        if (!rating) {
            alert("Please select a rating!");
            return;
        }
        if (!message.trim()) {
            alert("Please write a review!");
            return;
        }

        // Save review
        const newReview = {
            id: Date.now(),
            name,
            rating,
            message,
        };

        setReviews([newReview, ...reviews]);

        // Clear inputs
        setName("");
        setRating("");
        setMessage("");

        alert("Thank you for your review! ⭐");
    };

    return (
        <div className="w-full mx-auto p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-5 text-center">Write a Review</h2>

            {/* Review Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="font-semibold">Your Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label className="font-semibold">Rating</label>
                    <select
                        className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="">Select Rating</option>
                        <option value="1">⭐ 1 Star</option>
                        <option value="2">⭐⭐ 2 Stars</option>
                        <option value="3">⭐⭐⭐ 3 Stars</option>
                        <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                        <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                    </select>
                </div>

                <div>
                    <label className="font-semibold text-sm md:text-lg">Please share your opinion about the product</label>
                    <textarea
                        rows="3"
                        className="w-full border border-gray-300 px-3 py-2 rounded mt-1"
                        placeholder="Your review..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button type="submit"
                    className="w-full bg-gray-900 text-white py-2 rounded hover:bg-black">
                    SEND REVIEW
                </button>
            </form>

            {/* Display Reviews */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                {reviews.length === 0 && (
                    <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                )}

                {reviews.map((rev) => (
                    <div
                        key={rev.id}
                        className="border border-gray-300 px-2 py-1 rounded shadow-sm bg-gray-50"
                    >
                        <div className="flex items-center justify-between">
                            <h4 className="font-bold text-xl">{rev.name}</h4>
                            <p className="text-[8px] md:text-sm">{new Date().toLocaleString()}</p>
                        </div>
                        <p className="text-yellow-500">{`⭐`.repeat(rev.rating)}</p><hr className="text-gray-300 mt-1" />
                        <p className="mt-2">{rev.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
