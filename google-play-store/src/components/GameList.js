import React from "react";
import GameCard from "./GameCard";
import styles from "@/styles/GameList.module.css";

// Sample game data (Replace with API data later)
const games = [
  {
    id: 1,
    title: "Moy 7 - Virtual Pet Game",
    category: "Simulation • Pet",
    rating: 4.5,
    image: "/images/game1.jpg",
    icon: "/images/game1-icon.png",
  },
  {
    id: 2,
    title: "Stickman Party 234 MiniGames",
    category: "Arcade • Board",
    rating: 4.5,
    image: "/images/game2.jpg",
    icon: "/images/game2-icon.png",
  },
  {
    id: 3,
    title: "My Talking Angela 2",
    category: "Casual • Simulation",
    rating: 4.4,
    image: "/images/game3.jpg",
    icon: "/images/game3-icon.png",
  },
];

const GameList = () => {
  return (
    <div className={styles.grid}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
