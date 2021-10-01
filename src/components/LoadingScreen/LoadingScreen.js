import React from 'react'
import { useTransition, animated, config } from 'react-spring'
import { useSelector } from 'react-redux'
import Preloader from '../Preloader/Preloader'
import styles from './LoadingScreen.module.scss'

const LoadingScreen = () => {
  const loadScreenState = useSelector((state) => state.loadingScreenState.LoadScreenState)
  const transitions = useTransition(loadScreenState, {
    from: { width: '100%' },
    enter: { width: '100%' },
    reverse: false,
    leave: { width: '100%' },
    config: config.gentle,
    delay: 200,
  })
  return (
    <>
      {transitions(
        (props, item) => item && (
        <animated.div style={{
          ...props,
          zIndex: 10,
          position: 'fixed',
          top: '65px',
          left: 0,
          bottom: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
        }}
        >
          <div className={styles.Back}>
            <Preloader />

          </div>
        </animated.div>
        ),
      )}
    </>
  )
}

export default LoadingScreen;
