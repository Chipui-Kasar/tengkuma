import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

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
  return (
    <>
      <Link href={"/posts/" + post.slug}>{post.title}</Link>
      <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
    </>
  );
};
export default Articles;
