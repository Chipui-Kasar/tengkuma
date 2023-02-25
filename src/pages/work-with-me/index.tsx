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
        <title>Work With Me</title>
        <meta
          name="description"
          content="Let's work together to achieve your goals! I offer a variety of services, including web design, development, and digital marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Work With Me" />
        <meta
          property="og:description"
          content="Let's work together to achieve your goals! I offer a variety of services, including web design, development, and digital marketing."
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
