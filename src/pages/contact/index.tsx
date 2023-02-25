import Contactform from "@/components/contact/contact-form/contactform";
import Contactshowcase from "@/components/contact/contact-showcase/contactshowcase";
import React from "react";
import styles from "./contact.module.scss";
function Contact() {
  return (
    <>
      <main className={styles.container}>
        <Contactform />
        <Contactshowcase />
      </main>
    </>
  );
}

export default Contact;
