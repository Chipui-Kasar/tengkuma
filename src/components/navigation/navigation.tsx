import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";

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
        <Link href="/">
          <Image src={"/logo.png"} width={300} height={300} alt="Tengkuma" />
        </Link>
      </div>
      {/* <form>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          style={{ padding: "10px", borderRadius: "3px", border: "none" }}
        />
      </form> */}
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
          <Link href="/tengkuma" onClick={closeMenu}>
            Tengkuma
          </Link>
        </li>
        <li>
          <Link href="/store" onClick={closeMenu}>
            Store
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeMenu}>
            Blog
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
