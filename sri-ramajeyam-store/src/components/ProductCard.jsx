export default function ProductCard({ product, onAdd }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "1rem" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "6px", marginBottom: "0.5rem" }} />
      <h3 style={{ margin: "0.5rem 0" }}>{product.name}</h3>
      <p style={{ margin: 0, color: "#555" }}>{product.category}</p>
      <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>₹ {product.price} {product.unit}</p>
      <button onClick={() => onAdd(product)} style={{ background: "#16a34a", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "6px", cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
}
