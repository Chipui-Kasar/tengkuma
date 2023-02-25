import Profilecontact from "@/components/work-with-me/profile-contact/Profilecontact";
import React from "react";
import styles from "./contactform.module.scss";
function Contactform() {
  return (
    <section className={styles.contact_form}>
      <h2>Contact Me Here</h2>
      <form>
        <div className={styles.form_container}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_group}>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Enter your phone"
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
            />
          </div>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_group} style={{ width: "100%" }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contactform;
