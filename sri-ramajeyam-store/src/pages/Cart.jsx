export default function Cart({ cart, removeFromCart, updateQty, total }) {
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <section>
      <h2>Your Cart</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{ display: "flex", alignItems: "center", gap: "1rem", borderBottom: "1px solid #eee", padding: "0.5rem 0" }}>
            <img src={item.image} alt={item.name} style={{ width: "60px", height: "60px", borderRadius: "6px", objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <strong>{item.name}</strong>
              <div>₹ {item.price} × {item.qty} = ₹ {item.price * item.qty}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} style={{ color: "#ef4444", background: "transparent", border: "1px solid #ef4444", padding: "0.3rem 0.6rem", borderRadius: "6px" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹ {total}</h3>
    </section>
  );
}
