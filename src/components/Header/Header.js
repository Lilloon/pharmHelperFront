import React from 'react'
import { Link } from 'react-router-dom';
// import ClickOutside from '@codecraftkit/clickoutside'
import { useDispatch, useSelector } from 'react-redux';
import { setMobile } from '../../actions/mobileStoreAction';
import logo from './PHLOGO3.svg';
import styles from './Header.module.scss'
import InfMenu from '../InfMenu/InfMenu';
import { setMenu } from '../../actions/menuStateAction';

const Header = () => {
  const dispatch = useDispatch();
  const MobileState = useSelector((state) => state.mobileState.mobileState);
  const MenuState = useSelector((state) => state.menuState.menuState);

  function handleOnPress(e) {
    if (e.key === 'Enter') {
      dispatch(setMobile());
    }
  }

  return (
    <div className={styles.header}>
      <div
        className={`${styles.burger_menu} ${MobileState && styles.activeBigMenu}`}
        tabIndex={0}
        onClick={() => {
          dispatch(setMobile());
          if (MenuState) dispatch(setMenu());
        }}
        role="button"
        onKeyPress={handleOnPress}
        aria-label="MenuFilter"
      >
        <span />
        <span />
        <span />
      </div>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="Pharm.helper" />
      </Link>
      <InfMenu />
    </div>
  )
}

export default Header
