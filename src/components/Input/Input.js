import React from 'react'
import styles from './Input.module.scss'

const Input = ({
  placeHolder, Block = false, onChange, value,
}) => {
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  }
  return (
    <div
      className={styles.Input}
      tabIndex={0}
      role="button"
    >
      <input
        onChange={handleChange}
        className={`${styles.InputWindow} ${Block ? styles.Blocked : styles.Active}`}
        type="text"
        placeholder={placeHolder}
        disabled={Block}
        value={value}
      />
    </div>
  )
}

export default Input
