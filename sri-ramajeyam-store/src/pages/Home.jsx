export default function Home() {
  return (
    <section style={{ textAlign: "center", padding: "2rem", background: "linear-gradient(135deg, #1f2937, #0f172a)", color: "white", borderRadius: "12px", objectFit: "contain  " }}>
        <div className="container mt-4">
            <h1 className="text-primary">Sri RamaJeyam Store</h1>
            <p className="lead">Fresh vegetables and daily groceries delivered fast.</p>
        </div>
      <img src="/images/Grocery.jpg" alt="Store banner" style={{ width: "100%", borderRadius: "8px", marginTop: "1rem", objectFit: "contain" }} />
    </section>
  );
}
