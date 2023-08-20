import EntryForm from "./EntryForm";
import List from "./LIst";
import styles from "./PricingCardStyles.module.css";
import React, { useState, useEffect } from 'react';

const PricingCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("energy"); // default value
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/fetch_${selectedCategory}/`)
      .then(response => response.json())
      .then(data => {
        setTweets(data);
      })
      .catch(error => {
        console.error("There was an error fetching tweets", error);
      });
  }, [selectedCategory]); 

  return (
    <div className={styles.container}> 
      <div className={styles.content}>
        <List tweets={tweets}/>
      </div>
      <div className={styles.sidebar}>
        <EntryForm 
          onCategoryChange={(category) => setSelectedCategory(category)}
        />
      </div>
    </div>
  )
};

export default PricingCard;
