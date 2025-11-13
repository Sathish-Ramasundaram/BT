import { useState } from "react";
import { products as data } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Vegetables", "Groceries"];
  const list = filter === "All" ? data : data.filter((p) => p.category === filter);

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem"
  };

  return (
    <section>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{
              padding: "0.4rem 0.8rem",
              borderRadius: "6px",
              border: "1px solid #ddd",
              background: filter === c ? "#0ea5e9" : "white",
              color: filter === c ? "white" : "#333",
              cursor: "pointer"
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={grid}>
        {list.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </section>
  );
}
