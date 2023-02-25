import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      @{year} All Rights Reserved.
      <br /> Created with ❤ by Tengkuma
    </footer>
  );
}

export default Footer;
