/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './CheckBox.module.scss';

function handleChange(func) {
  if (func) func();
}

function CheckBox({
  text, disabled, func, checked,
}) {
  const [check, setCheck] = useState(checked || false);

  return (
    <>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          disabled={disabled}
          onChange={() => {
            setCheck(!check);
            handleChange(func);
          }}
          checked={check}
        />
        <span className={styles.fake_checkbox} />
        <span className={styles.text}>{text}</span>
        <span />
      </label>
    </>
  );
}

export default CheckBox;
