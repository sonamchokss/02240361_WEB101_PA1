import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import GameList from "../components/GameList";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          {/* Category Filter (Phone, Tablet, etc.) */}
          <CategoryFilter />

          {/* Popular Games Section */}
          <h2 className={styles.sectionTitle}>Popular Games</h2>
          <GameList />
        </main>
      </div>
    </>
  );
}
