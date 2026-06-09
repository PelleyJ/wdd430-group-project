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
        <p>
          Learn more about the independent artisans behind our handmade
          products.
        </p>
      </section>

      <section className={styles.products}>
        <h2>Featured Sellers</h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Samuel's Woodshop</h3>
            <p>Location: Idaho</p>
            <p>Specialty: Wooden bowls and home decor</p>
          </article>

          <article className={styles.card}>
            <h3>Haven Leather Co.</h3>
            <p>Location: Utah</p>
            <p>Specialty: Handmade leather goods</p>
          </article>

          <article className={styles.card}>
            <h3>Cozy Craft Studio</h3>
            <p>Location: Oregon</p>
            <p>Specialty: Knitted blankets and home accessories</p>
          </article>
        </div>
      </section>
    </main>
  );
}