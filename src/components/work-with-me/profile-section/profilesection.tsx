import React, { useEffect } from "react";
import styles from "./profilesection.module.scss";

function Profilesection() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_title}>
        I hail from North-East India and specialize in ReactJs development.
        Passionate about exploring innovative concepts, I take great pleasure in
        collaborating with like-minded individuals who share the same vision of
        using technology for the greater good. I am quite unconventional and
        unique in my own way
      </div>
      <div className={styles.profile_image}>
        <img
          src="https://media.graphassets.com/ON2vDzY8Q5yZ1Y7C2Kkp"
          alt="Chipui Kasar"
          srcSet="https://media.graphassets.com/ON2vDzY8Q5yZ1Y7C2Kkp"
        />
      </div>
    </div>
  );
}

export default Profilesection;