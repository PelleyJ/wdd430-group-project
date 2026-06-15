import styles from "../page.module.css";

const cartItems = [
  {
    id: 1,
    name: "Handcrafted Wooden Bowl",
    price: 29.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 39.99,
    quantity: 1,
  },
];

export default function CartPage() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
        <h2>Shopping Cart</h2>
        <p>Review your selected handmade products before checkout.</p>
      </section>

      <section className={styles.products}>
        <h2>Your Cart</h2>

        <div className={styles.grid}>
          {cartItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <h3>{item.name}</h3>
              <p>
                <strong>Price:</strong> ${item.price.toFixed(2)}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Subtotal:</strong> $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </article>
          ))}
        </div>

        <div className={styles.card}>
          <h3>Order Summary</h3>
          <p>
            <strong>Total:</strong> ${total.toFixed(2)}
          </p>
          <a href="/checkout" className={styles.button}>
            Proceed to Checkout
          </a>
        </div>
      </section>
    </main>
  );
}