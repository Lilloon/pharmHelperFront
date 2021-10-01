/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable valid-typeof */
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string'
import DrugCardList from '../DrugCardsList/DrugCardList'
import styles from './SearchResult.module.scss'
import { GetSearchDrugs } from '../../actions/sagas/drugsAction';
import { setSearchParams, setPageNumber } from '../../actions/SearchParamsAction';
import { setLoad } from '../../actions/LoadScreenAction';

const SearchResult = () => {
  let location = useLocation()
  let history = useHistory()
  const dispatch = useDispatch()
  const [searchResults, setResults] = useState([])
  const searchParams = useSelector((state) => state.SearchParamsReducer.searchParams)
  const checkResults = useSelector((state) => state.SearchList.SearchDrugs)
  useEffect(() => {
    dispatch(setPageNumber(Number(queryString.parse(location.search).pageNumber)))

    const linkSearchParams = {
      searchValue: location.pathname,
      link: location.search,
      pageNumber: Number(queryString.parse(location.search).pageNumber),
      params: {
        country: queryString.parse(location.search).country !== undefined ? queryString.parse(location.search).country : [],
        pageNumber: Number(queryString.parse(location.search).pageNumber),
      },
    }
    dispatch(setSearchParams(linkSearchParams))
  }, [])
  const handleClick = (data) => {
    dispatch(setLoad())
    dispatch(setPageNumber(data.selected))
    const changedParams = {
      searchValue: searchParams.searchValue,
      link: searchParams.link,
      pageNumber: data.selected,
      params: {
        country: queryString.parse(location.search).country !== undefined ? queryString.parse(location.search).country : [],
        pageNumber: data.selected,
      },
    }
    const linkSearchParams = {
      searchValue: location.pathname,
      link: queryString.stringify({ ...changedParams.params }),
      pageNumber: data.selected,
      params: {
        country: queryString.parse(location.search).country !== undefined ? queryString.parse(location.search).country : [],
        pageNumber: data.selected,
      },
    }
    dispatch(setSearchParams(linkSearchParams))
    history.push(`${linkSearchParams.searchValue}?${queryString.stringify({ ...changedParams.params })}`)
  }
  useEffect(() => {
    const linkSearchParams = {
      link: location.search,
      searchValue: location.pathname,
      pageNumber: Number(queryString.parse(location.search).pageNumber),
      params: {
        country: queryString.parse(location.search).country !== undefined ? queryString.parse(location.search).country : [],
        pageNumber: Number(queryString.parse(location.search).pageNumber),
      },
    }
    dispatch(setLoad())
    dispatch(GetSearchDrugs(linkSearchParams))
  }, [location, location.search])
  useEffect(() => {
    if (checkResults) {
      setResults(checkResults)
    }
  }, [checkResults])
  return (
    <div>
      <DrugCardList drugObj={searchResults} />
      <ReactPaginate
        forcePage={Number(queryString.parse(location.search).pageNumber)}
        disableInitialCallback
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={checkResults.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={window.screen.width < 400 ? 2 : 4}
        onPageChange={handleClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  )
}

export default SearchResult
