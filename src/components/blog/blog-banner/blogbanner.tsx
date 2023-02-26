import { formatDate, getReadingTime } from "@/functions/common-function";
import Image from "next/image";
import React from "react";
import { BlogCardTypes } from "../blog-cards/BlogCardTypes";
import styles from "./blogbanner.module.scss";

function Blogbanner(props: BlogCardTypes) {
  return (
    <div className={styles.container}>
      <h2>All The Tips In One Place</h2>
      <div className={styles.highlight}>
        <Image
          aria-label={props.title}
          src={props.coverImage.url}
          alt={props.title}
          width={300}
          height={300}
          className={styles.banner_image}
        />
        <div className={styles.pub_date}>
          {formatDate(new Date(props.date))} -{" "}
          {getReadingTime(props.content.html)}
        </div>
        <div className={styles.title}>{props.title}</div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        ></div>
      </div>
    </div>
  );
}

export default Blogbanner;
