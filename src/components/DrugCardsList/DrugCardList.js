import React from 'react'
import styles from './DrugCardList.module.scss'
import DrugCard from '../DrugCard/DrugCard'

const DrugCardsList = ({ drugObj }) => (
  <div className={styles.Main}>
    <div className={styles.DrugCardsList}>
      <div className={styles.Container}>
        {
            drugObj.map((item) => (
              <DrugCard
                drugName={item.trade_name}
                image={item?.picture}
                manufName={item.manuf_name}
                weight={item.dosage}
                id={item.id}
                key={item.id}
              />
            ))
        }
      </div>
    </div>
  </div>
)

export default DrugCardsList
