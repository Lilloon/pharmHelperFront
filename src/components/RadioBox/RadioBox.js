import React from 'react'
import styles from './RadioBox.module.scss'
import RadioButton from '../RadioButton/RadioButton'

const RadioBox = () => (
  <div className={styles.box}>
    <RadioButton name="doza" text="Дозированный" />
    <RadioButton name="doza" text="Недозированный" />
  </div>
)

export default RadioBox
