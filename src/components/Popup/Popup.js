import React, { useContext } from 'react'
import styles from './Popup.module.scss'
import close from './close-cross-in-circular-outlined-interface-button.svg'
import { ModalContext } from '../contexts'

const Popup = (props) => {
  const { closeModal } = useContext(ModalContext)
  const { children, title } = props;
  const handlerClick = () => {
    closeModal()
  }
  const handlePress = (e) => {
    if (e.key === 'Esc') {
      handlerClick()
    }
  }
  return (
    <div className={styles.popup}>
      <div
        className={styles.background}
        role="button"
        tabIndex={0}
        onKeyPress={handlePress}
        onClick={handlerClick}
      >
        a
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              { title }
            </h1>
            <div className={styles.iconClose} role="button" tabIndex={0} onKeyPress={handlePress} onClick={handlerClick}>
              <img className={styles.iconClose} src={close} alt="" />

            </div>

          </div>
          <div className={styles.text}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
