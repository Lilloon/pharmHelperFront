import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring'
import { useDispatch } from 'react-redux'
import styles from './DrugCard.module.scss'
import DefaultImg from '../DefaultImg/DefaultImg'
import NameDrugCard from '../NameDrugCard/NameDrugCard'
import { setLoad } from '../../actions/LoadScreenAction'

const DrugCard = ({
  drugName, weight, id, image,
}) => {
  const props = useSpring({
    to: { opacity: 1, width: '100%' },
    from: { opacity: 0, width: '100%' },
    config: config.slow,
  })
  const dispatch = useDispatch();
  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      setLoad()
    }
  }
  return (
    <>
      <div
        className={styles.Container}
        aria-label="Drug"
      >
        <animated.div style={props}>
          <Link to={`/card/${id}`} style={{ width: '100%', boxSizing: 'border-box', margin: '0.5%' }}>
            <div
              className={styles.DrugCard}
              onClick={() => dispatch(setLoad())}
              tabIndex={0}
              role="button"
              onKeyPress={checkEnter}
            >
              <div className={styles.Content}>
                <div className={styles.DrugCardImg}>
                  <DefaultImg src={image} />
                </div>
                <div className={styles.NameContainer}>
                  <NameDrugCard name={drugName} caption={weight} />
                </div>
              </div>
            </div>
          </Link>
        </animated.div>
      </div>
    </>
  )
}

export default DrugCard
