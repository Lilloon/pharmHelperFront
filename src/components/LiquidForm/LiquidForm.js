import React from 'react'
import styles from './LiquidForm.module.scss'
import ChipButton from '../ChipButton/ChipButton'
import testObj from '../../TestObj'

// const A = [{}]
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

takeForm(1, arr);

const LiquidForm = () => (
  <div className={styles.box}>
    <h1 className={styles.box_title}>Лекарственные формы</h1>
    <span className={styles.box_title__mini}>Жидкие</span>
    <div className={styles.box_chips}>
      {arr.map((text) => <ChipButton text={text} key={Math.random(counter)} />)}
    </div>
  </div>
)

export default LiquidForm
