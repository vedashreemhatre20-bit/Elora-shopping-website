import { useState } from "react";
import { supabase } from "./supabase";

export default function AddProduct({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function addProduct() {
    const { error } = await supabase.from("products").insert([
      {
        name,
        price,
        image,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Insert error:", error);
      alert("Failed to add product");
      return;
    }

    setName("");
    setPrice("");
    setImage("");

    if (onAdd) onAdd();

    alert("Product Added!");
  }

  return (
    <div>
      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}