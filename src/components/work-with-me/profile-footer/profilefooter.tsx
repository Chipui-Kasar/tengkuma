import Link from "next/link";
import React from "react";
import styles from "./profilefooter.module.scss";
function Profilefooter() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        I&apos;d Love to Hear From You.
        <br /> Here&apos;s How You Can Reach Me
      </div>
      <button>
        <Link href="/contact">Get In Touch</Link>
      </button>
    </div>
  );
}

export default Profilefooter;
