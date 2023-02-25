import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import styles from "./slug.module.scss";
import { formatDate, getReadingTime } from "@/functions/common-function";
import BlogCard from "@/components/blog/blog-cards/BlogCard";
import { getRecentPosts } from "@/service/service";
import { RWebShare } from "react-web-share";

let url: any;
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clefu7dgi02r601up2w9175vf/master"
);
const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
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
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post; // Fixed - accessing the first element of the array
  post.key = post.id;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export const Articles = ({ post }: any) => {
  const [recentPosts, setrecentPosts] = useState([]);
  useEffect(() => {
    url = window.location.origin;
    getPosts();
  }, []);
  const getPosts = async () => {
    const recentPosts: any = await getRecentPosts();
    setrecentPosts(recentPosts);
  };
  return (
    <>
      <main className={styles.container}>
        <nav>
          <div className={styles.author}>
            <div className={styles.author}>
              <img
                aria-label={post.author.name}
                src={post.author.picture.url}
                alt={post.author.name}
                className={styles.author_image}
              />
              <span className={styles.author_name}>
                &nbsp; {post.author.name}, &nbsp;
              </span>
            </div>
            <ul>
              <li>
                <span>
                  {formatDate(new Date(post.date))},{" "}
                  {getReadingTime(post.content.html)}
                </span>
              </li>
            </ul>
          </div>

          <RWebShare
            data={{
              text: post.title,
              url: url + `/blog/posts${post.slug}`,
              title: "Share this content",
            }}
            sites={[
              "facebook",
              "twitter",
              "reddit",
              "whatsapp",
              "telegram",
              "linkedin",
              "mail",
            ]}
            onClick={() => console.log("shared successfully!")}
          >
            <span className={styles.share_icon}>
              <li></li>
              <li></li>
              <li></li>
            </span>
          </RWebShare>
        </nav>

        <h2 className="green">{post.title}</h2>
        <img
          src={post.coverImage.url}
          alt=""
          width="100%"
          className={styles.banner_image}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.content.html }}
          className={styles.description}
        ></div>
        <hr style={{ marginTop: "30px" }} />
      </main>
      <div className={styles.recent_post}>
        <nav>
          <h2>Recent Posts</h2>
          <Link href={"/blog"}>See All</Link>
        </nav>
        <BlogCard data={recentPosts} />
      </div>
    </>
  );
};
export default Articles;
