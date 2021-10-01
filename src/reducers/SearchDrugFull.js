import { SET_DRUGS_TYPES, CLEARFULLDRUG_TYPE } from '../actions/types'

const defaultState = {
  SearchDrugFull: {},
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_DRUGS_TYPES.SET_SEARCH_FULL_DRUG:
      return { ...state, SearchDrugFull: action?.$payload }
    case CLEARFULLDRUG_TYPE.CLEAR:
      return defaultState
    default:
      return state;
  }
};
