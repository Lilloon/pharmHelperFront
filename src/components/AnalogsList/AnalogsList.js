import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
// import { queryString } from 'query-string'
import ReactPaginate from 'react-paginate'
import styles from './AnalogList.module.scss'
import DrugCardList from '../DrugCardsList/DrugCardList'
import { getAnalogs } from '../../actions/sagas/drugsAction'
import { setLoad } from '../../actions/LoadScreenAction'

const AnalogsList = () => {
  let history = useHistory()
  const [analogsArr, setAnalogsArr] = useState([])
  let location = useLocation()
  const dispatch = useDispatch()
  const analogs = useSelector((state) => state.analogs.analogs.drugs)
  const totalPages = useSelector((state) => state.analogs.analogs.totalPages)
  const handlerClick = (data) => {
    setAnalogsArr([])
    history.push(`${Number(location.pathname.split('/').filter((item) => (Number(item))).join(''))}?pageNumber=${data.selected}`)
    console.log()
  }
  useEffect(() => {
    if (analogs) {
      setAnalogsArr(analogs)
    }
  }, [analogs])
  useEffect(() => {
    dispatch(setLoad())
    const analogsParams = {
      id: Number(location.pathname.split('/').filter((item) => (Number(item))).join('')),
      page: Number(location.search.split('/')[0].split('').filter((item) => (Number(item))).join('')),
    };
    console.log(analogsParams, location.search.split('/'))
    dispatch(getAnalogs(analogsParams))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, location.search])
  return (
    <div styles={styles.analogsListBox}>
      <DrugCardList drugObj={analogsArr} />
      <ReactPaginate
        forcePage={Number(location.search.split('').filter((item) => (Number(item))).join(''))}
        disableInitialCallback
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPages}
        onPageChange={handlerClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />

    </div>

  )
}

export default AnalogsList
