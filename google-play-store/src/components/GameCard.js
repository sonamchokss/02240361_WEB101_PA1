import React from "react";
import Image from "next/image";
import styles from "@/styles/GameCard.module.css";

const GameCard = ({ game }) => {
  return (
    <div className={styles.card}>
      {/* Game Image */}
      <div className={styles.imageWrapper}>
        <Image src={game.image} alt={game.title} width={300} height={180} className={styles.image} />
      </div>

      {/* Game Details */}
      <div className={styles.details}>
        <div className={styles.iconWrapper}>
          <Image src={game.icon} alt={`${game.title} icon`} width={50} height={50} className={styles.icon} />
        </div>
        <div>
          <h3 className={styles.title}>{game.title}</h3>
          <p className={styles.category}>{game.category}</p>
          <p className={styles.rating}>⭐ {game.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
