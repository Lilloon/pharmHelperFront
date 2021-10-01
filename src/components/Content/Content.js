import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './Content.module.scss'
import ChipButton from '../ChipButton/ChipButton'
import VityaHello from '../Vitya/VityaHello/VityaHello';
import DrugCardsList from '../DrugCardsList/DrugCardList';
import { getPopularDrugs } from '../../actions/sagas/drugsAction';
import { checkPopular, clearPopularCheck } from '../../actions/popularCheckAction';

const Content = () => {
  const dispatch = useDispatch();
  const drugPage = useSelector((state) => state.PopularDrugs.PopularDrugs);
  const [buttonActive, setButtonActive] = useState([true, false, false, false])
  const [obj, setObj] = useState([...drugPage])
  useEffect(() => {
    dispatch(getPopularDrugs());
  }, [dispatch]);

  useEffect(() => {
    if (drugPage) {
      setObj(drugPage);
    }
  }, [drugPage]);

  const all = () => {
    dispatch(checkPopular('all'));
    setObj(drugPage);
    setButtonActive([true, false, false, false]);
  }

  const prostuda = () => {
    dispatch(checkPopular('простуда'));
    let obj1 = drugPage.filter((item) => (item.tag === 'Простуда'));
    setObj(obj1);
    setButtonActive([false, true, false, false]);
  }

  const heart = () => {
    dispatch(checkPopular('сердце и сосуды'))
    let obj1 = drugPage.filter((item) => (item.tag === 'Проблемы с сердцем и сосудами'))
    setObj(obj1);
    setButtonActive([false, false, true, false]);
  }

  const spazm = () => {
    dispatch(checkPopular('спазмы'))
    let obj1 = drugPage.filter((item) => (item.tag === 'Спазмы'))
    setObj(obj1);
    setButtonActive([false, false, false, true]);
  }

  useEffect(() => (() => dispatch(clearPopularCheck())), [])

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Популярные запросы</h1>
      </div>
      <VityaHello />
      <div className={styles.chips}>
        <ChipButton text="Все" func={all} activation={buttonActive[0]} />
        <ChipButton text="Простуда" func={prostuda} activation={buttonActive[1]} />
        <ChipButton text="Проблемы с сердцем и сосудами" func={heart} activation={buttonActive[2]} />
        <ChipButton text="Спазмы" func={spazm} activation={buttonActive[3]} />
      </div>
      <DrugCardsList drugObj={obj} />
    </div>
  )
}
export default Content;
