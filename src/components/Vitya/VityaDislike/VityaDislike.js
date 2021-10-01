import React from 'react'
import { useSelector } from 'react-redux'
import {
  useTransition, animated, config, useSpring,
} from 'react-spring'
import styles from './VityaDislike.module.scss'
import vityaHello from './dislike.svg'

const VityaDislike = () => {
  const dislikeState = useSelector((state) => state.VityaDislikeState.DislikeState)
  const animCloud = useSpring({
    from: { transform: 'scale(0)', rotateZ: -45 },
    to: { transform: 'scale(1)', rotateZ: -45 },
    config: config.gentle,
    delay: 1000,
  })
  const transitions = useTransition(dislikeState, {
    from: { rotateZ: -90 },
    onPause: true,
    enter: { rotateZ: 45 },
    leave: { rotateZ: -95 },
    config: config.gentle,
  })
  return (
    <>
      {
      transitions(
        (props, item) => item && (
        <animated.div style={{
          ...props,
          position: 'fixed',
          zIndex: 0,
          width: '100px',
          top: '150px',
          left: '26%',
          height: '340px',
        }}
        >
          <animated.div style={{
            ...animCloud, position: 'fixed', width: '170px', top: '-70px', left: '-50px',
          }}
          >
            <div className={styles.textCloud}>
              <h1>Введите что-нибудь.</h1>
            </div>
          </animated.div>
          <img src={vityaHello} className={styles.hello} alt="Hello" />
        </animated.div>
        ),
      )
}

    </>
  )
}

export default VityaDislike
