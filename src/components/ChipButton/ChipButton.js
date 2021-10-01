/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './ChipButton.module.scss';

function handlerClick(func) {
  if (func) func();
}

function ChipButton({
  text, func, activation,
}) {
  return (
    <>
      <button
        type="button"
        className={`${styles.button} ${activation && styles.Active}`}
        onClick={() => {
          if (!activation) handlerClick(func);
        }}
      >
        {text}
      </button>
    </>
  );
}

export default ChipButton;
