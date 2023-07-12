import React from "react";
import styles from "./topsmartphone.module.scss";
const phones = [
  {
    id: 1,
    name: "Nothing Phone(2)",
    description: "",
    image:
      "https://cdn1.smartprix.com/rx-ixzWtvP56-w420-h420/nothing-phone-1-12gb.jpg",
    url: "https://in.nothing.tech/pages/phone-2",
  },
  {
    id: 2,
    name: "IQOO Neo 7 Pro",
    description: "",
    image:
      "https://images.hindustantimes.com/tech/htmobile4/P39164/images/Design/157756-v1-iqoo-neo-7-pro-256gb-mobile-phone-large-7.jpg",
    url: "https://www.iqoo.com/in/products/neo7pro",
  },
  {
    id: 3,
    name: "OnePlus Nord 3 5g",
    description: "",
    image: "https://cdn1.smartprix.com/rx-irPFo8esu-w1200-h1200/rPFo8esu.jpg",
    url: "https://www.oneplus.in/oneplus-nord-3-5g",
  },
  // Add more phone objects as needed
];
function TopSmartPhone() {
  return (
    <div>
      <header>
        <h1>Top Mobile Phone Showcase</h1>
      </header>

      <main className={styles.phone_container}>
        {phones.map((phone) => (
          <div key={phone.id} className={styles.phone_card}>
            <img src={phone.image} alt={phone.name} />
            <h2>{phone.name}</h2>
            <p>{phone.description}</p>
            <a href={phone.url} target="_blank" className={styles.button}>
              See More
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default TopSmartPhone;
