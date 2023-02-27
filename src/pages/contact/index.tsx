import Contactform from "@/components/contact/contact-form/contactform";
import Contactshowcase from "@/components/contact/contact-showcase/contactshowcase";
import Head from "next/head";
import React from "react";
import styles from "./contact.module.scss";
function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with our team for any inquiries or feedback. Our contact form is available 24/7 and we'll get back to you as soon as possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Tengkuma, Chipui Kasar, Chipui, Tengkuma Chipui, Latest technology, Sharepoint, Artificial Intelligence, SharePoint Online, Reactjs, Nextjs, How to,"
        />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Get in touch with our team for any inquiries or feedback. Our contact form is available 24/7 and we'll get back to you as soon as possible."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/dkAe2w0R2Ixwgey8AoEQ"
        />
        <meta
          property="og:url"
          content="https://media.graphassets.com/dkAe2w0R2Ixwgey8AoEQ"
        />
        <meta property="og:type" content="website" />

        {/* Author information */}
        <meta name="author" content="Chipui Kasar" />
        <meta name="twitter:creator" content="@chipuikasar" />
      </Head>
      <main className={styles.container}>
        <Contactform />
        <Contactshowcase />
      </main>
    </>
  );
}

export default Contact;
