import React from 'react'
import styles from './NameDrugCard.module.scss'

const NameDrugCard = ({ name, caption }) => (
  <div className={styles.NameDrugCard}>
    <h2 className={styles.Name}>{name}</h2>
    <h2 className={styles.Caption}>
      {caption}
    </h2>

  </div>
)

export default NameDrugCard
