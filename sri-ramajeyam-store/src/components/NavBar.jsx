import { Link } from "react-router-dom";

export default function NavBar({ cartCount = 0 }) {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #eee" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}
