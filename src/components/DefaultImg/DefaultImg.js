import React from 'react';
import img from '../../img/capsules.png'
import styles from './DefaultImg.module.scss'

const DefaultImg = (src) => {
  if (src.src !== null) {
    return (
      <div className={styles.DefImgBack}>
        <img src={`data:image/png;base64, ${src.src}`} alt="" className={styles.img} />
      </div>
    )
  }
  return (
    <div className={styles.DefImgBack_without}>
      <img src={img} alt="" className={styles.img2} />
    </div>
  )
}

export default DefaultImg
