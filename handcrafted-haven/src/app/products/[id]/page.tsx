import styles from "../../page.module.css";

const products = [
  {
    id: "1",
    name: "Handcrafted Wooden Bowl",
    price: "$29.99",
    description: "A unique wooden bowl made for everyday use.",
    seller: "Samuel's Woodshop",
  },
  {
    id: "2",
    name: "Leather Wallet",
    price: "$39.99",
    description: "A handmade leather wallet with a simple classic design.",
    seller: "Haven Leather Co.",
  },
  {
    id: "3",
    name: "Ceramic Coffee Mug",
    price: "$19.99",
    description: "A cozy handmade mug for coffee, tea, or hot chocolate.",
    seller: "Cozy Craft Studio",
  },
];

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className={styles.page}>
        <h1>Product Not Found</h1>
        <a href="/products">Back to Products</a>
      </main>
    );
  }

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
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </section>

      <section className={styles.products}>
        <div className={styles.card}>
          <h3>Product Details</h3>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
          <p>
            <strong>Seller:</strong> {product.seller}
          </p>
          <button>Add to Cart</button>
        </div>
      </section>
    </main>
  );
}