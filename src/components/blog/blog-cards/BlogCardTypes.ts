export interface BlogCardTypes {
  id: any;
  title: string;
  slug: any;
  excerpt: string;
  date: any;
  coverImage: { url: any };
  seo: { keywords: any[] };
  tags: any;
  author: {
    name: any;
    picture: {
      url: any;
    };
  };
  content: {
    html: any;
  };
}
