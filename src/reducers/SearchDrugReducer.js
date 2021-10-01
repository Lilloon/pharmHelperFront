import { SET_DRUGS_TYPES } from '../actions/types'

const defaultState = {
  SearchDrugs: [],
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_DRUGS_TYPES.SET_SEARCH_LIST:
      return { ...state, SearchDrugs: action?.$payload }
    case SET_DRUGS_TYPES.SEARCH_DRUGS_CLEAR:
      return { ...state, SearchDrugs: [] }
    default:
      return state;
  }
};
