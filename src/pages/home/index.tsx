import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Iwui Tengkuma | Chipui kasar</title>
        <meta
          name="description"
          content="Welcome to our website blog! Here you'll find articles on a variety of topics, including technology, lifestyle, and more. Iwui Tengkuma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Iwui Tengkuma, Chipui Kasar, Chipui, Iwui Tengkuma Chipui, Latest technology, Sharepoint, Artificial Intelligence, SharePoint Online, Reactjs, Nextjs, How to,"
        />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Iwui Tengkuma | Chipui kasar" />
        <meta
          property="og:description"
          content="Welcome to our website blog! Here you'll find articles on a variety of topics, including technology, lifestyle, and more. Iwui Tengkuma"
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
        <meta
          name="google-site-verification"
          content="KrT1sWgLJCi0eyUJuGBI4aZ3Nc1PjP0Pqe1z4Jeq22I"
        />

        {/* Author information */}
        <meta name="author" content="Chipui Kasar" />
        <meta name="twitter:creator" content="@chipuikasar" />
      </Head>
      <main className={`${styles.home}`}>
        <div className={styles.intro}>
          Elevate Your <span className={styles.primaryGlow}>Business</span> to
          New Heights
        </div>
        <span className={styles.title}>
          Get tips to accelerate your business growth
        </span>
        <Link
          className={styles.sendMail}
          href="mailto:chipuikasar@gmail.com?subject=Tell me more about how to boost my business&body=I'm interested in learning how to improve my business and I would appreciate it if you could provide me with more information on ways to boost it. Whether it's strategies for increasing sales, improving marketing tactics, streamlining operations, or other areas of business development, any insights would be greatly appreciated. I'm eager to enhance my business performance and achieve greater success."
        >
          Tell Me
        </Link>
      </main>
      <h1 style={{ zIndex: "-1", position: "absolute", visibility: "hidden" }}>
        IWUI TENGKUMA
      </h1>
    </>
  );
}

export default Home;
