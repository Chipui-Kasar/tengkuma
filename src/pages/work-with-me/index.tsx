import Profilecontact from "@/components/work-with-me/profile-contact/Profilecontact";
import Profilefooter from "@/components/work-with-me/profile-footer/profilefooter";
import Profilesection from "@/components/work-with-me/profile-section/profilesection";
import React from "react";
import styles from "./work.module.scss";
function Work() {
  return (
    <>
      <div className={styles.work_container}>
        <Profilesection />
        <Profilecontact />
        <Profilefooter />
      </div>
    </>
  );
}

export default Work;
