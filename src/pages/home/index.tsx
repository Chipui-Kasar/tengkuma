import Head from "next/head";
import React from "react";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Tengkuma</title>
        <meta
          name="description"
          content="Tengkuma is a vibrant and dynamic blog website that features a diverse range of content on various topics, including lifestyle, health, technology, entertainment, and more. With a team of passionate writers and bloggers, Tengkuma delivers fresh and engaging content that keeps readers coming back for more. From informative articles to personal anecdotes and thought-provoking opinion pieces, Tengkuma has something for everyone. With an easy-to-use interface and a commitment to quality content, Tengkuma is the go-to destination for anyone looking for insightful and engaging blog posts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
