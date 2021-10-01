/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './RadioButton.module.scss';

function handlerChange(func) {
  if (func) func();
}

function RadioButton({
  text, name, disabled, checked, func, value,
}) {
  return (
    <>
      <label className={styles.label}>
        <input
          type="radio"
          className={styles.radio}
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={() => handlerChange(func)}
        />
        <span className={styles.fake_radio} />
        <span className={styles.text}>{text}</span>
      </label>
    </>
  );
}

export default RadioButton;
