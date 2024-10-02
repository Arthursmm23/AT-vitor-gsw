// src/Footer.js
import React from "react";

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Golden State Warriors. Todos os direitos reservados.</p>
      <div className="social">
        <a href="https://twitter.com/warriors" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a
          href="https://instagram.com/warriors"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
