/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Main.module.scss'
import CountryBox from '../CountryBox/CountryBox'
import SearchField from '../SearchField/SearchField'
import TextButton from '../TextButton/TextButton'
import { setMobile } from '../../actions/mobileStoreAction';
import { setDislike, unsetDislike } from '../../actions/DislikeAction'
import { getAllCountries } from '../../actions/sagas/drugsAction'
import { setSearchParams, clearPageNumber } from '../../actions/SearchParamsAction';
import { getQueryParams } from '../../utils/rest';

const Main = () => {
  let searchObj = {}
  let history = useHistory()
  const [allCountriesArr, setAllCountries] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();
  const MobileState = useSelector((state) => state.mobileState.mobileState);
  const handlerChangeInput = (value) => {
    setSearchValue(value);
  }
  class CountryItem {
    constructor(id, value) {
      this.id = id
      this.value = value
    }

    createCountryItem() {
      return ({ id: this.id, value: this.value })
    }
  }
  const params = useSelector((state) => state.SearchParamsReducer.searchParams)
  useEffect(() => {
  }, [params])
  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])
  const allCountries = useSelector((state) => state.AllCountries.allCountries[0])
  useEffect(() => {
    if (allCountries) {
      allCountries.forEach((item, index) => {
        setAllCountries((current) => [...current, new CountryItem(index, item.manuf_country)])
      })
    }
  }, [allCountries])
  const country = useSelector((state) => state.SelectedCountry.SelectedCountry)
  const checkSearchField = () => {
    dispatch(clearPageNumber())
    if (searchValue !== '') {
      searchObj = {
        link: '',
        searchValue,
        params: { country, pageNumber: 0 },
      }
      // dispatch(setMobile());
      dispatch(setSearchParams(searchObj));
      searchObj.link = getQueryParams(searchObj.params)
      history.push(`/search/${searchValue}?${searchObj.link}`)
    } else {
      dispatch(setDislike())
      setTimeout(() => {
        dispatch(unsetDislike())
      }, 4000)
    }
    return (<></>)
  }
  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      checkSearchField()
    }
  }

  return (
    <div className={`${styles.Main_box} ${MobileState && styles.box_show}`}>
      <p className={styles.box_title}>Поиск</p>
      <p className={styles.box_search__title}>
        Введите название препарата или активного вещества,
        его ФТГ или код АТХ
      </p>
      <div className={styles.box_search}>
        <div className={styles.box_search__searchfield}>
          <SearchField placeHolder="Найти" value={searchValue} onChange={handlerChangeInput} func={checkSearchField} />
        </div>
        <CountryBox obj={allCountriesArr} />
      </div>
      <div
        className={styles.button_find}
        onClick={() => {
          if (MobileState) {
            dispatch(setMobile())
          }
        }}
        tabIndex={0}
        role="button"
        onKeyPress={checkEnter}
        aria-label="Menu"
      >
        <TextButton text="Найти" func={checkSearchField} />
      </div>
    </div>
  )
}

export default Main
