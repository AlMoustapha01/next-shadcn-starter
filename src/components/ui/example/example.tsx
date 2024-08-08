import styles from "./example.module.scss"
import * as React from "react";

export type ExampleProps = {};

export const Example = (props: ExampleProps) => {
  return (
    <div className={styles['example']}>
      Example
    </div>
  );
};