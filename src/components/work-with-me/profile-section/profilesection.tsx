import Image from "next/image";
import React from "react";
import styles from "./profilesection.module.scss";

function Profilesection() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_title}>
        <h1>
          Shop From your favourite site and order with my account! Get unlimited
          cashback / Get the product at a lower price
        </h1>
      </div>
      <div className={styles.profile_image}>
        <Image
          aria-label="Chipui Kasar"
          src={"/author.png"}
          alt="Chipui Kasar"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Profilesection;
