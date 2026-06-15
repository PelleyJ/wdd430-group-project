"use client";

import { useState } from "react";
import styles from "../page.module.css";

const products = [
  {
    id: 1,
    name: "Handcrafted Wooden Bowl",
    price: "$29.99",
    description: "A unique wooden bowl made for everyday use.",
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: "$39.99",
    description: "A handmade leather wallet with a simple classic design.",
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug",
    price: "$19.99",
    description: "A cozy handmade mug for coffee, tea, or hot chocolate.",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h2>Search Products</h2>
        <p>Find handmade products by name.</p>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </section>

      <section className={styles.products}>
        <h2>Results</h2>

        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <article key={product.id} className={styles.card}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>{product.price}</strong>
              </p>
              <a href={`/products/${product.id}`} className={styles.button}>
                View Details
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}