import styles from "./example2.module.scss"

import * as React from "react"; 

export type Example2Props = {};

export const Example2 = (props: Example2Props) => { 
  return (
    <div className={styles['example2']}>
      Example2
    </div>
  ); 
};