import { SEARCH_PARAMS_TYPES } from '../actions/types'

const defaultState = {
  searchParams: {},
  pageNumber: 0,
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SEARCH_PARAMS_TYPES.SET_SEARCH_PARAMS:
      return { ...state, searchParams: action?.$payload }
    case SEARCH_PARAMS_TYPES.SET_PAGE_NUMBER:
      return { ...state, pageNumber: action?.$payload }
    case SEARCH_PARAMS_TYPES.CLEAR_PAGE_NUMBER:
      return { ...state, pageNumber: 0 }
    default:
      return state
  }
}
