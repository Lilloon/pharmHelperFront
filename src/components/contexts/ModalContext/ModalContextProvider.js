import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { ModalContext } from './ModalContext'
import Popup from '../../Popup/Popup'

export const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [ModalContent, setModalContent] = useState(null)
  const transitions = useTransition(modalOpened, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 150 },
  })

  const openModal = (modalConfig) => {
    setModalContent(modalConfig)
    setModalOpened(true)
  }
  const closeModal = () => {
    setModalOpened(false)
  }

  const valueModelProvider = {
    openModal,
    closeModal,
  }
  return (
    <ModalContext.Provider value={valueModelProvider}>
      {
      transitions(
        (props, item) => item && (
        <animated.div style={{
          ...props,
          position: 'absolute',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
        >
          <Popup {...ModalContent} />
        </animated.div>
        ),
      )
      }
      {children}
    </ModalContext.Provider>
  )
}
