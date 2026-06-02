import styles from "./page.module.css";

export default function Home() {
  const products = [
    "Handmade Wooden Bowl",
    "Ceramic Coffee Mug",
    "Knitted Blanket",
    "Leather Wallet",
  ];

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
        <h2>Discover Unique Handmade Products</h2>
        <p>Support independent artisans and makers with every purchase.</p>
        <a href="/products" className={styles.button}>Shop Now</a>
      </section>

      <section className={styles.products}>
        <h2>Featured Products</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product} className={styles.card}>
              <h3>{product}</h3>
              <p>Beautifully crafted by independent sellers.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}