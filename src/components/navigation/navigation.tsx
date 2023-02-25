import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Tengkuma</Link>
      </div>

      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
        <Link href="/" onClick={closeMenu}>
          <li>Home</li>
        </Link>
        <Link href="/work-with-me" onClick={closeMenu}>
          <li>Work With me</li>
        </Link>
        <Link href="/blog" onClick={closeMenu}>
          <li>Blog</li>
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          <li>Contact</li>
        </Link>
        {/* <li>
          <form>
            <input
              type="text"
              placeholder="search"
              style={{ padding: "10px", borderRadius: "3px", border: "none" }}
            />
          </form>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
