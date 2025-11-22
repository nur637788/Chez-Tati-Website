import React, { useState } from "react";

function ProductSlider() {
    const products = [
        {
            id: 1,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "James K.",
            title: "Traveler",
            image: "https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 2,
            desc: "Absolutely wonderful! Thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "John Deo.",
            title: "Developer",
            image: "https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 3,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐",
            name: "Weellim.",
            title: "Desingner",
            image: "https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 4,
            desc: " I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐",
            name: "Jhon Kim.",
            title: "Business",
            image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 5,
            desc: "You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
            star: "⭐⭐⭐⭐⭐",
            name: "James K.",
            title: "Traveler",
            image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
        },

    ];

    const [current, setCurrent] = useState(0);

    const nextCard = () => {
        setCurrent((prev) => (prev + 1) % products.length);
    };
    const previewCard = () => {
        setCurrent((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className="">

            <div className='py-10 mt-10'>
                <div className='space-y-3'>
                    <h2 className='text-2xl md:text-4xl font-bold w-70 md:w-96'>Customer experience is important to us</h2>
                    <p className='text-sm md:text-lg max-w-2xl text-[#EA5326] leading-6'>Sed dictum ipsum elementum diam dapibus, ut sodales orci monte consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-evenly mt-8'>
                        <div className='space-y-2'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg'>
                                <img className='w-6 h-6' src="/icons/icon1.png" alt="icon1" />
                            </div>
                            <h5 className='font-semibold'>Original Products</h5>
                        </div>
                        <div className='space-y-2'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg'>
                                <img className='w-6 h-6' src="/icons/icon2.png" alt="icon2" />
                            </div>
                            <h5 className='font-semibold'>Satisfaction Guarantee</h5>
                        </div>
                        <div className='space-y-2'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg'>
                                <img className='w-6 h-6' src="/icons/icon3.png" alt="icon3" />
                            </div>
                            <h5 className='font-semibold'>New Arrival Everyday</h5>
                        </div>
                        <div className='space-y-2'>
                            <div className='bg-[#EA5326] w-10 h-10 flex items-center justify-center rounded-lg'>
                                <img className='w-8 h-6' src="/icons/icon4.png" alt="icon4" />
                            </div>
                            <h5 className='font-semibold'>Fast Shipping</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-10 space-y-2">
                <h2 className="text-2xl md:text-4xl font-bold">What People Are Saying</h2>
                <p className="text-sm">We provide support for more than 15K+ Businesses.</p>
            </div>
            <div className="flex gap-5 bg-white shadow-sm py-5 max-w-[700px] m-auto px-5 rounded-md">
                <img src={products[current].image} alt={products[current].title}
                    className="w-20 md:w-40 h-20 md:h-40 rounded-sm mx-auto shadow-md object-cover" />
                <div className="space-y-1">
                    <p className="text-gray-900 text-sm">{products[current].desc}</p>
                    <p className="text-gray-500">{products[current].star}</p>
                    <hr className="my-2 text-gray-300" />
                    <h2 className="text-xl font-bold ">{products[current].name}</h2>
                    <p className="text-gray-500 text-sm">{products[current].title}</p>
                </div>
            </div>


            <div className="flex gap-3 items-center  justify-center my-5">
                <button onClick={previewCard} className="bg-gray-200 shadow-blue-200 shadow-sm hover:bg-gray-300 hover:scale-95 transition-all duration-300 w-7 h-7 rounded-full cursor-pointer">‹</button>
                <button onClick={nextCard} className=" bg-gray-200 shadow-blue-200 shadow-sm hover:bg-gray-300 hover:scale-95 transition-all duration-300 w-7 h-7 rounded-full cursor-pointer">›</button>
            </div>
        </section>
    );
}

export default ProductSlider;
