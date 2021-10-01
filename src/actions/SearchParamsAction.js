import { createAction } from './actionCreator';
import { SEARCH_PARAMS_TYPES } from './types'

export const setSearchParams = createAction(SEARCH_PARAMS_TYPES.SET_SEARCH_PARAMS)
export const setPageNumber = createAction(SEARCH_PARAMS_TYPES.SET_PAGE_NUMBER)
export const clearPageNumber = createAction(SEARCH_PARAMS_TYPES.CLEAR_PAGE_NUMBER)
