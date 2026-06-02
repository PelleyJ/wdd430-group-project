import styles from "../page.module.css";

export default function SellersPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.navbar}>
        <h1>Handcrafted Haven</h1>
        <div>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/sellers">Sellers</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <h2>Meet Our Sellers</h2>
        <p>Learn more about the independent artisans behind our handmade products.</p>
      </section>
    </main>
  );
}