import { useSelector } from "react-redux";

function SearchResult() {
    const search = useSelector((state) => state.search.query);

    const homeData = [
        "Welcome to my website",
        "The Best High-Quality Home Appliance Products 200+ Collections for your outfit inspirations in this summer",
        "New Product Discount Popular"
    ];

    const productData = [
        "laptop - All Category Essence Mascara Lash Princess furniture category groceries",
        "mens-shirts - Man Plaid Shirt",
        "furniture - Knoll Saarinen Executive Conference Chair",
        "smartphones - iPhone 5s iPhone 7s iPhone 11pro iPhone 16pro vivo",
        "mobile-accessories - Apple MagSafe Battery Pack",
        "womens-jewellery - Green Crystal Earring Samantha Howard",
        "womens-dresses - womens-dresses",
        "motorcycle - motorcycle Kawasaki Z800",
        "skin-care - product Keyboard Attitude Super Leaves Hand Soap",

    ];

    const aboutData = [
        "Bergham Chez Tati Website",
        "About us Welcome to",
        "Total Likes Website Views ",
        "Scope of Service"
    ];

    const contactData = [
        "Name: Abdun Nur",
        "Email: example@gmail.com",
        "Phone: 017XXXXXXX",
        "Location: Dhaka"
    ];

    const allData = [
        ...homeData,
        ...productData,
        ...aboutData,
        ...contactData
    ];

    const filtered = allData.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-5 mt-13">
            <h1 className="text-xl font-bold mb-3">Search Results</h1>

            {filtered.length > 0 ? (
                filtered.map((item, i) => (
                    <p key={i} className="p-2 bg-gray-100 border rounded mb-2">
                        {item}
                    </p>
                ))
            ) : (
                <p className="text-gray-500">No Results Found</p>
            )}
        </div>
    );
}

export default SearchResult;
