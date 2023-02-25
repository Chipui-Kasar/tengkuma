import Head from "next/head";
import React from "react";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Tengkuma | Chipui kasar</title>
        <meta
          name="description"
          content="Welcome to our website blog! Here you'll find articles on a variety of topics, including technology, lifestyle, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Tengkuma | Chipui kasar" />
        <meta
          property="og:description"
          content="Welcome to our website blog! Here you'll find articles on a variety of topics, including technology, lifestyle, and more."
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

      <main className={`${styles.home}`}>
        <div className={styles.intro}>
          Take Your <span className={styles.primaryGlow}>Business</span> To
          Higher Ground
        </div>
        <span className={styles.title}>
          Get tips to accelerate your business growth
        </span>
        <form>
          <input type="text" placeholder="Email Address *" />
          <button>Submit</button>
        </form>
      </main>
    </>
  );
}

export default Home;
