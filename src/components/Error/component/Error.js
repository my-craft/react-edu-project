import React from "react";
import styles from "./Error.module.css"

const Error = ({error}) => (
  <>
    {error ? <p className={styles.tasksError}>{error}</p> : ''}
  </>
);

export default Error;