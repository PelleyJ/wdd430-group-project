import styles from "../page.module.css";

export default function CheckoutPage() {
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
        <h2>Checkout</h2>
        <p>Enter your information to complete your order.</p>
      </section>

      <section className={styles.products}>
        <div className={styles.card}>
          <form action="/checkout/success">
            <p>
              <label>
                Name:
                <br />
                <input type="text" name="name" required />
              </label>
            </p>

            <p>
              <label>
                Email:
                <br />
                <input type="email" name="email" required />
              </label>
            </p>

            <p>
              <label>
                Shipping Address:
                <br />
                <input type="text" name="address" required />
              </label>
            </p>

            <button type="submit">Place Order</button>
          </form>
        </div>
      </section>
    </main>
  );
}