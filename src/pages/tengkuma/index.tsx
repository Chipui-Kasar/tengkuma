import Profilecontact from "@/components/work-with-me/profile-contact/Profilecontact";
import Profilefooter from "@/components/work-with-me/profile-footer/profilefooter";
import Profilesection from "@/components/work-with-me/profile-section/profilesection";
import Head from "next/head";
import React from "react";
import styles from "./work.module.scss";
function Work() {
  return (
    <>
      <Head>
        <title>Learn and apply</title>
        <meta
          name="description"
          content="Let's work together to achieve your goals! I offer a variety of services, including web design, development, and online shopping. Shop from flipkart, myntra or amazon and send me the link and get the item at discount price."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Tengkuma, online shopping, amazon, flipkart, Chipui Kasar, Chipui, Tengkuma Chipui, Latest technology, Sharepoint, Artificial Intelligence, SharePoint Online, Reactjs, Nextjs, How to,"
        />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Learn and apply" />
        <meta
          property="og:description"
          content="Let's work together to achieve your goals! I offer a variety of services, including web design, development, and online shopping. Shop from flipkart, myntra or amazon and send me the link and get the item at discount price."
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
      <div className={styles.work_container}>
        <Profilesection />
        {/* <Profilecontact /> */}
        <Profilefooter />
      </div>
    </>
  );
}

export default Work;
