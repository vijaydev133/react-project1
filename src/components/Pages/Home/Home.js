import React from "react";
import Nav from "../../assets/Nav";
import Products from "../../assets/Products.json";
import Book from "../../assets/Book";

export default function Home() {
  let card = Products.map((product) => {
    return <Book key={product.id} prod={product} />;
  });

  return (
    <main>
      <Nav />
      <h1>Books</h1>
      <div className="home-container">{card}</div>
    </main>
  );
}
