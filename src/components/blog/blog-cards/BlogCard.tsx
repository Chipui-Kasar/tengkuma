import Link from "next/link";
import React from "react";
import { BlogCardTypes } from "./BlogCardTypes";
import styles from "./blogcards.module.scss";
import { formatDate, getReadingTime } from "@/functions/common-function";
import Image from "next/image";

const BlogCard = (props: any) => {
  return (
    <div className={styles.container}>
      {props.data
        .slice(props.parent === "main" ? 1 : 0)
        .map((item: BlogCardTypes, key: any) => {
          return (
            <div className={styles.grid} key={key}>
              <Link
                href={"/blog/posts/" + item.slug}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Image
                  aria-label={item.title}
                  src={item.coverImage?.url}
                  alt={item.title}
                  width={150}
                  height={150}
                />
                <div className={styles.pub_date}>
                  {formatDate(new Date(item.date))},{" "}
                  {getReadingTime(item.content.html)}
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.excerpt}</div>
              </Link>
              <Image
                aria-label={item.author?.name}
                width={10}
                height={10}
                src={item.author?.picture?.url}
                alt={item.author?.name}
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  bottom: "10px",
                }}
              />
              <div className={styles.author}>{item.author?.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogCard;
