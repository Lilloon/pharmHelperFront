import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './CountryBox.module.scss'
import Dropdown from '../Dropdown/Dropdown'
import { setSelectedCountry, clearSelectedCountry } from '../../actions/SelectedCountryAction'

const CountryBox = ({ obj }) => {
  const dispatch = useDispatch()
  const changeCountry = (value) => {
    dispatch(setSelectedCountry(value))
  }
  const clearCountry = () => {
    dispatch(clearSelectedCountry())
  }
  return (
    <div className={styles.box}>
      <span className={styles.box_title}>Страна-производитель</span>
      <Dropdown title="Выберите страну" items={obj} addSelectedToStore={changeCountry} clearSelectedToStore={clearCountry} />
    </div>
  )
}

export default CountryBox
