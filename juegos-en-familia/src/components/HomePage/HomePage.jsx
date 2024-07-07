import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <ul className={styles.homePage}>
      <li className={styles.tombola}>
        <Link to="/tombola">Tombola</Link>
      </li>
      <li className={styles.moneda}>
        <Link to="/moneda">Moneda</Link>
      </li>
      <li className={styles.talonario}>
        <Link to="/talonario">Talonario</Link>
      </li>
      <li className={styles.ruleta}>
        <Link to="/ruleta">Ruleta</Link>
      </li>
    </ul>
  );
}
