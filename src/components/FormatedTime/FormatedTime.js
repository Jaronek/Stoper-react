import React from "react";
import styles from './FormatedTime.module.scss';

const FormatedTime = (props) => {
  return (
    <div className={styles.timer}>
      <span >
        {("0" + Math.floor((props.time / 1000 / 60 / 60) % 60)).slice(-2)}:
      </span>
      <span >
        {("0" + Math.floor((props.time / 1000 / 60) % 60)).slice(-2)}:
      </span>
      <span >
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span >
        {("0" + ((props.time / 1000) % 100)).slice(-1)}
      </span>
    </div>
  );
}
export default FormatedTime;