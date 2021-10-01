import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.Footer}>
    <div>
      <h2> Pharm.helper является справочным сервисом.</h2>
      { /* eslint-disable-next-line max-len */}
      <h2> Информация, размещённая на сайте не предназначена для замены профессиональной медицинской помощи.</h2>
    </div>
  </footer>
)

export default Footer
