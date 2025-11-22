import React, { useState } from "react";

const FAQ_DATA = [
    {
        question: "What services does Chez-Tati offer?",
        answer:
            "Chez-Tati offers premium organic products, homemade items, and a variety of healthy lifestyle essentials.",
    },
    {
        question: "Do you offer home delivery?",
        answer:
            "Yes, we provide fast and reliable home delivery within the city. Delivery time may vary based on location.",
    },
    {
        question: "How can I place an order?",
        answer:
            "You can place an order directly through our website, via phone call, or by contacting us on social media.",
    },
    {
        question: "Are the products 100% organic?",
        answer:
            "Yes, all products are sourced from trusted suppliers and are guaranteed to be organic and chemical-free.",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            "We accept cash on delivery, mobile banking (Bkash, Nagad), and Visa/MasterCard for online payments.",
    },
    {
        question: "Can I return a product?",
        answer:
            "Yes, products can be returned within 48 hours if they are damaged, incorrect, or not as described.",
    },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4 w-fit md:w-2xl">
                {FAQ_DATA.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-500 rounded-md cursor-pointer"
                        onClick={() => toggleFAQ(index)}>
                        <div className="bg-gray-200 rounded-t-md">
                            <div className="flex justify-between items-center p-2">
                                <h3 className="text-md md:text-lg font-semibold">{faq.question}</h3>
                                <span className="text-2xl font-bold">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </div>
                        </div>

                        {openIndex === index && (
                            <p className="py-1 text-gray-600 px-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
