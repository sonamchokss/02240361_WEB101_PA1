import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Side - Google Play Logo */}
      <div className={styles.left}>
        <img src="/images/logo.png" alt="Google Play" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li><a href="#">Games</a></li>
          <li><a href="#">Apps</a></li>
          <li><a href="#">Kids</a></li>
        </ul>
      </div>

      {/* Right Side - Icons */}
      <div className={styles.right}>
        <img src="/images/search-icon.png" alt="Search" className={styles.icon} />
        <img src="/images/help-icon.png" alt="Help" className={styles.icon} />
        <div className={styles.profile}>S</div> {/* User profile icon */}
      </div>
    </nav>
  );
};

export default Navbar;
