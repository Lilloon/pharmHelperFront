import React from 'react'
import styles from './SpecBlock.module.scss'

const SpecBlock = ({ specItems }) => (
  <div className={styles.SpecBlock}>
    <h2 className={styles.Name}>Информация</h2>
    {
      specItems.map((item) => (
        <div className={styles.item}>
          <div className={styles.Spec}>{item.spec}</div>
          <div className={styles.Value}>{item.value}</div>
        </div>
      ))
    }
  </div>
)

export default SpecBlock
