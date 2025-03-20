import Image from 'next/image';
import styles from '../styles/Example.module.css';

export default function ExamplePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/images/google-play-logo.png" alt="Google Play Logo" width={40} height={40} />
        <nav>
          <a href="#">Games</a>
          <a href="#">Apps</a>
          <a href="#">Kids</a>
        </nav>
        <div className={styles.headerIcons}>
          <a href="#"><Image src="/images/help-icon.png" alt="Help" width={24} height={24} /></a>
          <a href="#"><Image src="/images/search-icon.png" alt="Search" width={24} height={24} /></a>
          <a href="#"><Image src="/images/user-icon.png" alt="User" width={24} height={24} /></a>
        </div>
      </header>
      <div className={styles.filters}>
        <button className={styles.active}>Phone</button>
        <button>Tablet</button>
        <button>TV</button>
        <button>Chromebook</button>
        <button>Watch</button>
      </div>
      <h1>Popular Games</h1>
      <div className={styles.games}>
        <div className={styles.game}>
          <Image src="/images/moy7.jpg" alt="Moy 7" width={300} height={200} />
          <div className={styles.details}>
            <Image src="/images/moy7-icon.png" alt="Moy 7 Icon" width={50} height={50} />
            <div>
              <h2>Moy 7 - Virtual Pet Game</h2>
              <p>Simulation • Pet</p>
              <p>4.5 ★</p>
            </div>
          </div>
        </div>
        <div className={styles.game}>
          <Image src="/images/stickman-party.jpg" alt="Stickman Party" width={300} height={200} />
          <div className={styles.details}>
            <Image src="/images/stickman-party-icon.png" alt="Stickman Party Icon" width={50} height={50} />
            <div>
              <h2>Stickman Party 234 MiniGames</h2>
              <p>Arcade • Board</p>
              <p>4.5 ★</p>
            </div>
          </div>
        </div>
        <div className={styles.game}>
          <Image src="/images/talking-angela2.jpg" alt="My Talking Angela 2" width={300} height={200} />
          <div className={styles.details}>
            <Image src="/images/talking-angela2-icon.png" alt="My Talking Angela 2 Icon" width={50} height={50} />
            <div>
              <h2>My Talking Angela 2</h2>
              <p>Casual • Simulation</p>
              <p>4.4 ★</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
