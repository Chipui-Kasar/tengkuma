import { gql, GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clefu7dgi02r601up2w9175vf/master"
);
const Recent_QUERY = gql`
  {
    posts(orderBy: date_DESC, first: 4) {
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
const ALL_QUERY = gql`
  {
    posts(orderBy: date_DESC) {
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
export async function getRecentPosts() {
  const { posts } = await graphcms.request(Recent_QUERY);
  return posts;
}
export const getAllPosts = async () => {
  const { posts } = await graphcms.request(ALL_QUERY);
  return posts;
};
