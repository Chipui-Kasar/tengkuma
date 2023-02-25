import React from "react";
import styles from "./profilecontact.module.scss";
function Profilecontact() {
  return (
    <section className={styles.work_with_me}>
      <h2>Work With Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
      </form>
      <button type="submit">Send Message</button>
    </section>
  );
}

export default Profilecontact;
