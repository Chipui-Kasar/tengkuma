import Link from "next/link";
import React from "react";
import { BlogCardTypes } from "./BlogCardTypes";
import styles from "./blogcards.module.scss";
import { formatDate, getReadingTime } from "@/functions/common-function";
import Image from "next/image";

const BlogCard = (props: any) => {
  return (
    <div className={styles.container}>
      {props.data.map((item: BlogCardTypes) => {
        return (
          <div className={styles.grid}>
            <Link href={"/blog/posts/" + item.slug}>
              <Image
                src={item.coverImage.url}
                alt={item.author.name}
                width={100}
                height={100}
              />
              <div className={styles.pub_date}>
                {formatDate(new Date(item.date))},{" "}
                {getReadingTime(item.content.html)}
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.excerpt}</div>
            </Link>
            <Image
              width={10}
              height={10}
              src={item.author.picture.url}
              alt=""
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                bottom: "10px",
              }}
            />
            <div className={styles.author}>{item.author.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
