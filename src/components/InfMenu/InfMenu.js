import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ModalContext } from '../contexts'
import styles from './InfMenu.module.scss'
import { setMenu } from '../../actions/menuStateAction';
import { setMobile } from '../../actions/mobileStoreAction';
import GenericsAndAnalogsInfo from '../GenericsAndAnalogsInfo/GenericAndAnalogs';
import FtgInfoInfo from '../FtgInfo/FtgInfo';
import AthCodeInfo from '../AthCodeInfo/AthCodeInfo';

const InfMenu = () => {
  const dispatch = useDispatch();
  const MobileState = useSelector((state) => state.mobileState.mobileState);
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
      <div
        className={styles.short_menu}
        tabIndex={0}
        onClick={() => {
          dispatch(setMenu())
          if (MobileState) dispatch(setMobile())
        }}
        role="button"
        onKeyPress={handlePress}
        aria-label="Menu"
      />
      <div className={`${styles.TextBox}`}>
        <div role="button" className={styles.ButtonMenu} tabIndex={0} onClick={() => handleClick('Дженерики и аналоги', <GenericsAndAnalogsInfo />)} onKeyPress={() => handlePress('kek', 'lol')}>Дженерики и аналоги</div>
        <div role="button" className={styles.ButtonMenu} tabIndex={0} onClick={() => handleClick('Фармакологический Указатель', <FtgInfoInfo />)} onKeyPress={() => handlePress('kek', 'lol')}>Фармакологический указатель</div>
        <div role="button" className={styles.ButtonMenu} tabIndex={0} onClick={() => handleClick('АТХ код', <AthCodeInfo />)} onKeyPress={() => handlePress('kek', 'lol')}>АТХ поиск</div>
      </div>
    </>
  )
}

export default InfMenu;
