import React from 'react'
import styles from "./PricingCardStyles.module.css";

export default function List({ tweets }) {
  return (
      <ul className={styles.transactions}>
          {tweets.map((tweet, index) => (
              <li key={index}>
                <p className={styles.name}>{tweet.text}</p>
              </li>
          ))}
      </ul>
  );
}

