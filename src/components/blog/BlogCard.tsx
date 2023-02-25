import Link from "next/link";
import React from "react";
import { BlogCardTypes } from "./BlogCardTypes";

const BlogCard = (props: BlogCardTypes) => {
  return (
    <div>
      <Link href={"/blog/posts/" + props.slug}>{props.title}</Link>
      <div>{props.author.name}</div>
    </div>
  );
};

export default BlogCard;
