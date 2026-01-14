import Head from "next/head";
import { Inter } from "next/font/google";
import { BlogCardTypes } from "@/components/blog/blog-cards/BlogCardTypes";
import BlogCard from "@/components/blog/blog-cards/BlogCard";
import Blogbanner from "@/components/blog/blog-banner/blogbanner";
import styles from "./blog.module.scss";
import { getAllPosts } from "@/service/service";
const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const posts: any = await getAllPosts();

  // const { posts } = await graphcms.request(QUERY);
  posts.key = posts.id;

  return {
    props: {
      posts,
    },
    revalidate: 3000,
  };
};
export default function Blog({ posts }: any) {
  return (
    <>
      <Head>
        <title>Blog</title>
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
        <meta property="og:title" content="Blog" />
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

        {/* Author information */}
        <meta name="author" content="Chipui Kasar" />
        <meta name="twitter:creator" content="@chipuikasar" />
      </Head>

      <main className={`${styles.blog_container}`}>
        {posts.slice(0, 1).map((item: BlogCardTypes, key: any) => {
          return <Blogbanner {...item} key={key} />;
        })}
        <nav>
          <h2>All Posts</h2>
        </nav>
        <BlogCard data={posts} parent="main" />
      </main>
    </>
  );
}
