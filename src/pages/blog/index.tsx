import Head from "next/head";
import { Inter } from "next/font/google";
import { GraphQLClient, gql } from "graphql-request";
import { BlogCardTypes } from "@/components/blog/blog-cards/BlogCardTypes";
import BlogCard from "@/components/blog/blog-cards/BlogCard";
import Blogbanner from "@/components/blog/blog-banner/blogbanner";
import styles from "./blog.module.scss";
const inter = Inter({ subsets: ["latin"] });

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clefu7dgi02r601up2w9175vf/master"
);
const QUERY = gql`
  {
    posts {
      id
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      seo {
        keywords
      }
      tags
      author {
        id
        name
        picture {
          url
        }
      }
      content {
        html
      }
    }
  }
`;
export const getStaticProps = async () => {
  const { posts } = await graphcms.request(QUERY);
  posts.key = posts.id;

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
export default function Blog({ posts }: any) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Welcome to our website blog! Here you'll find articles on a variety of topics, including technology, lifestyle, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Blog" />
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

      <main className={`${styles.blog_container}`}>
        {posts.slice(0, 1).map((item: BlogCardTypes) => {
          return <Blogbanner {...item} />;
        })}
        <nav>
          <h2>All Posts</h2>
        </nav>
        <BlogCard data={posts} />
      </main>
    </>
  );
}
