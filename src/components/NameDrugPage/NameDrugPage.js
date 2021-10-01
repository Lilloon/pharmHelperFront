import React from 'react'
import styles from './NameDrugPage.module.scss'

const NameDrugPage = ({ name, caption, forma }) => (
  <div className={styles.NameDrugPage}>
    <h2 className={styles.Name}>{name}</h2>
    <h2 className={styles.form}>{forma}</h2>
    <h2 className={styles.Caption}>
      {caption}
    </h2>

  </div>
)

export default NameDrugPage
