import React, { useState } from "react";
import styles from "./contactform.module.scss";
function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className={styles.contact_form}>
      <h2>Contact Me Here</h2>

      <form
        action={`https://api.whatsapp.com/send?phone=8264163783&text=Name: ${name} %0a Number: ${phone} %0a Email: ${email} %0a Subject:${subject} %0a Message: ${message}`}
      >
        <div className={styles.form_container}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_group}>
            <label htmlFor="number">Phone</label>
            <input
              type="number"
              id="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="number"
              placeholder="Enter your phone"
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
        <button type="submit">
          <a
            href={`https://api.whatsapp.com/send?phone=8264163783&text=Name: ${name} %0aNumber: ${phone} %0aEmail: ${email} %0aSubject:${subject} %0aMessage: ${message}`}
            target="_blank"
          >
            Submit
          </a>
        </button>
      </form>
    </section>
  );
}

export default Contactform;
