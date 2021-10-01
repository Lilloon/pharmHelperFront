import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {
  config, useTransition, animated, useSpring,
} from 'react-spring'
import Spinner from './phlogospinner3.svg'

const Preloader = () => {
  const loadScreenState = useSelector((state) => state.loadingScreenState.LoadScreenState)
  const [DelayHeartBeat, setDelay] = useState(true)
  const styles = useSpring({
    loop: loadScreenState,
    from: { transform: 'scale(1.15)' },
    to: { transform: 'scale(1)' },
    delay: DelayHeartBeat ? 200 : 400,
    config: config.gentle,
    onRest: () => loadScreenState && setDelay(!DelayHeartBeat),
  })
  const transitions = useTransition(loadScreenState, {
    from: { transform: 'scale(0)', rotateZ: 0 },
    enter: { transform: 'scale(1)', rotateZ: 360 },
    leave: { transform: 'scale(0)', rotateZ: 0 },
    config: config.gentle,
    reverse: loadScreenState,
    delay: 200,
  })
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', flexGrow: 1,
    }}
    >
      {transitions(
        (props, item) => item && (
        <animated.div style={{
          position: 'absolute',
          zIndex: 100,
          ...props,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <animated.img src={Spinner} alt=" " style={{ ...styles, width: '200px' }} />
        </animated.div>
        ),
      )}
    </div>
  )
}

export default Preloader;
