import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';
import DrugPage from './components/DrugPage/DrugPage';
import ScrollToTop from './components/ScrollToTop/scroll';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Content from './components/Content/Content';
import { ModalProvider } from './components/contexts'
import { setMobile } from './actions/mobileStoreAction';
import VityaDislike from './components/Vitya/VityaDislike/VityaDislike';
import { setMenu } from './actions/menuStateAction';
import ShortMenu from './components/ShortMenu/ShortMenu';
import SearchResult from './components/SearchResult/SearchResult'
import AnalogsList from './components/AnalogsList/AnalogsList'

function App() {
  const MobileState = useSelector((state) => state.mobileState.mobileState);
  const MenuState = useSelector((state) => state.menuState.menuState);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = MobileState ? 'hidden' : 'auto';
  }, [MobileState]);
  useEffect(() => {
    document.body.style.overflow = MenuState ? 'hidden' : 'auto'
  }, [MenuState]);

  function handleOnPress(e) {
    if (e.key === 'Enter') {
      dispatch(setMobile());
    }
  }

  function handleOnClose(e) {
    if (e.key === 'Enter') {
      dispatch(setMenu());
    }
  }

  return (
    <ModalProvider>
      <div className={styles.App}>
        <ScrollToTop />
        <Header />
        <ShortMenu />
        <div
          className={`${MenuState && styles.click_outside}`}
          onClick={() => {
            dispatch(setMenu())
          }}
          tabIndex={0}
          role="button"
          onKeyPress={handleOnClose}
          aria-label="Menu"
        />
        <div className={styles.body}>
          <LoadingScreen />
          <div
            className={`${MobileState && styles.blur}`}
            onClick={() => dispatch(setMobile())}
            tabIndex={0}
            role="button"
            onKeyPress={handleOnPress}
            aria-label="Menu"
          />
          <Main />
          <VityaDislike />
          <div className={styles.MainContent}>
            <Switch>
              <Route exact path="/">
                <Content />
              </Route>
              <Route path="/search/">
                <SearchResult />
              </Route>
              <Route exact path="/card/:id">
                <DrugPage />
              </Route>
              <Route path="/analogs/:id">
                <AnalogsList />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default App;
