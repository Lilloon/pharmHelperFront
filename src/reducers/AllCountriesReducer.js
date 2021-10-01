import { SET_DRUGS_TYPES } from '../actions/types'

const defaultState = {
  allCountries: [],
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_DRUGS_TYPES.SET_ALL_COUNTRIES_LIST:
      return { ...state, allCountries: [...state.allCountries, action?.$payload] }
    default:
      return state;
  }
};
