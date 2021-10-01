import React from 'react'
import styles from './DetailsBlock.module.scss'

const DetailsBlock = ({ details }) => (
  <div className={styles.DetailsBlock}>
    <h2 className={styles.Details}>Подробнее</h2>
    <h2 className={styles.DetailsText}>{details}</h2>
  </div>
)

export default DetailsBlock
