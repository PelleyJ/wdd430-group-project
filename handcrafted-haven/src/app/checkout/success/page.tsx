import styles from "../../page.module.css";

export default function CheckoutSuccessPage() {
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
        <h2>Thank You for Your Order!</h2>
        <p>Your handmade items are being prepared for shipment.</p>
        <a href="/products" className={styles.button}>
          Continue Shopping
        </a>
      </section>
    </main>
  );
}