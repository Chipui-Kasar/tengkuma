import Link from "next/link";
import React from "react";
import styles from "./contactshowcase.module.scss";
function Contactshowcase() {
  return (
    <div className={styles.container}>
      <h2>Available Here Too</h2>
      <div className={styles.contact_details}>
        <Link href={"mailto:chipuikasar@gmail.com"}>Chipuikasar@gmail.com</Link>
        <span>+91 8264163783</span>
      </div>
      {/* <div className={styles.contact_social}>
        <span>F</span>
        <span>G</span>
        <span>In</span>
      </div> */}
      <div className={styles.contact_details}>
        Looking forward to hearing from you.
      </div>
    </div>
  );
}

export default Contactshowcase;
