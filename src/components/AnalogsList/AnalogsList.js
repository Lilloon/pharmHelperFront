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
  const analogs = useSelector((state) => state.analogs.analogs)
  const handlerClick = (data) => {
    setAnalogsArr([])
    history.push(`${Number(location.pathname.split('').filter((item) => (Number(item))).join(''))}?pageNumber=${data.selected}`)
  }
  useEffect(() => {
    if (analogs.content) {
      setAnalogsArr(analogs.content)
    }
  }, [analogs])
  useEffect(() => {
    dispatch(setLoad())
    const analogsParams = {
      id: Number(location.pathname.split('').filter((item) => (Number(item))).join('')),
      page: Number(location.search.split('').filter((item) => (Number(item))).join('')),
    }
    dispatch(getAnalogs(analogsParams))
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
        pageCount={analogs.totalPages}
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
