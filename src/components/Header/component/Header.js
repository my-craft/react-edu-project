import React from "react";
import styles from "./Header.module.css";

const Header = ({title}) => (
  <header className={styles.header}>
    <p>
      {title}
    </p>
  </header>
);

export default Header;

