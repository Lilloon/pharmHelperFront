import React, { useState, useEffect } from 'react'
import {
  useTransition, animated, config, useSpring,
} from 'react-spring'
import styles from './VityaHello.module.scss'
import vityaHello from './hello.svg'

const VityaHello = () => {
  const [off, setOff] = useState(false)
  useEffect(() => {
    setOff(true)
  }, [])
  const animCloud = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: config.gentle,
    delay: 1000,
    onRest: () => setTimeout(() => setOff(false), 5000),
  })
  const transitions = useTransition(off, {
    from: { rotateZ: 180 },
    onPause: true,
    enter: { rotateZ: 0 },
    leave: { rotateZ: 180 },
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
          width: '65px',
          bottom: '-180px',
          right: '220px',
          height: '367px',
          zIndex: '2',
        }}
        >
          <animated.div style={{ ...animCloud, width: '220px' }}>
            <div className={styles.textCloud}>
              <h1>Давай найдём тебе лекарство!</h1>
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

export default VityaHello
