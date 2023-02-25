import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
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
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/work-with-me" onClick={closeMenu}>
            Work With me
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
