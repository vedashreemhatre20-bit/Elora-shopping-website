import { Navbar } from "../Component/Navbar";
import AddProduct from "../Component/Addproduct";
import { useState, useEffect } from "react";
import { supabase } from "../Component/supabase";

export function Products() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const { data, error } = await supabase.from("products").select("*").order("id", { ascending: false });
        if (error) {
            console.error("Fetch products error:", error);
            return;
        }
        setProducts(data || []);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="ProductsPage">
            <Navbar />

            <h1>Products Page</h1>

            <AddProduct onAdd={fetchProducts} />

            <div className="ProductsList">
                {products.length === 0 && <p>No products yet.</p>}

                {products.map((p) => (
                    <div className="ProductItem" key={p.id}>
                        <img src={p.image || "https://via.placeholder.com/180"} alt={p.name} />
                        <div className="ProductInfo">
                            <h3>{p.name}</h3>
                            <p>₹{p.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}