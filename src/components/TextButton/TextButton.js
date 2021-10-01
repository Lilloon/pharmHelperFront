import React from 'react'
import styles from './TextButton.module.scss'

function handlerClick(func) {
  if (func) func();
}

const TextButton = ({
  text, styleButton = 1, Block = false, func,
}) => (
  <button
    className={`${styles.TextButton}
    ${styleButton === 1 && styles.Default}
    ${styleButton === 2 && styles.OnlyBorders}
    ${styleButton === 3 && styles.OnlyText}
    ${Block && styles.Blocked}`}
    type="button"
    disabled={Block}
    onClick={() => handlerClick(func)}
  >
    {text}
  </button>
)

export default TextButton
