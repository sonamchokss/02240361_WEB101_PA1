import React, { useState } from "react";
import styles from "../styles/CategoryFilter.module.css";

const categories = ["Phone", "Tablet", "TV", "Chromebook", "Watch"];

const CategoryFilter = () => {
  const [selected, setSelected] = useState("Phone");

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.button} ${selected === category ? styles.active : ""}`}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
