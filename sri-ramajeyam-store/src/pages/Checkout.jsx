import { useState } from "react";

export default function Checkout({ total }) {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed!\nName: ${form.name}\nTotal: ₹ ${total}`);
  };

  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.8rem", maxWidth: "420px" }}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <textarea name="address" placeholder="Delivery Address" value={form.address} onChange={handleChange} rows={4} required />
        <button type="submit" style={{ background: "#0ea5e9", color: "white", border: "none", padding: "0.6rem 1rem", borderRadius: "6px", cursor: "pointer" }}>
          Place Order (₹ {total})
        </button>
      </form>
    </section>
  );
}
