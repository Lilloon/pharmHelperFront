import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModalContext } from '../contexts'
import styles from './ShortMenu.module.scss'
import { setMenu } from '../../actions/menuStateAction'
import ScrollToTop from '../ScrollToTop/scroll';

const ShortMenu = () => {
  const dispatch = useDispatch();
  const MenuState = useSelector((state) => state.menuState.menuState);
  const { openModal } = useContext(ModalContext)

  const handleClick = (title, children) => {
    openModal({
      title,
      children,
    })
  }

  const handlePress = (e, title, children) => {
    if (e.key === 'Enter') {
      handleClick(title, children)
    }
  }

  return (
    <>
      <ScrollToTop />
      <div className={`${styles.TextBox}  ${MenuState && styles.new_mobile}`}>
        <div
          role="button"
          className={styles.ButtonMenu}
          tabIndex={0}
          onClick={() => {
            handleClick('kek', 'lol')
            dispatch(setMenu())
          }}
          onKeyPress={() => handlePress('kek', 'lol')}
        >
          Дженерики и аналоги
        </div>
        <div
          role="button"
          className={styles.ButtonMenu}
          tabIndex={0}
          onClick={() => {
            handleClick('kek1', 'lol1')
            dispatch(setMenu())
          }}
          onKeyPress={() => handlePress('kek', 'lol')}
        >
          Фармакологический указатель
        </div>
        <div
          role="button"
          className={styles.ButtonMenu}
          tabIndex={0}
          onClick={() => {
            handleClick('kek2', 'lol2')
            dispatch(setMenu())
          }}
          onKeyPress={() => handlePress('kek', 'lol')}
        >
          АТХ поиск
        </div>
      </div>
    </>
  )
}

export default ShortMenu;
