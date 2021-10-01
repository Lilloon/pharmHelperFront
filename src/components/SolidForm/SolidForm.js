import React from 'react'
import styles from './SolidForm.module.scss'
import ChipButton from '../ChipButton/ChipButton'
import testObj from '../../TestObj'

let counter = 0;
let arr = [];

function takeForm(i) {
  testObj.map((item) => {
    if (item.drugForm[0] === i) {
      arr.push(item.drugForm[1])
    }
    return (<></>)
  })
  arr = [...new Set(arr)]
}

takeForm(2, arr);

const SolidForm = () => (
  <div className={styles.box}>
    <span className={styles.box_title__mini}>Твердые</span>
    <div className={styles.box_chips}>
      {
        arr.map((element) => (<ChipButton text={element} key={Math.random(counter)} />))
      }
    </div>
  </div>
)

export default SolidForm
