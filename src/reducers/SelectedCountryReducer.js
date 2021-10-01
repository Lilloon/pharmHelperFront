import { SELECTED_COUNTRY_TYPES } from '../actions/types'

const defaultState = {
  SelectedCountry: [],
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SELECTED_COUNTRY_TYPES.SET_SELECTED_VAULUE:
      return { ...state, SelectedCountry: action?.$payload }
    case SELECTED_COUNTRY_TYPES.CLEAR_SELECTED_VALUE:
      return { ...state, SelectedCountry: [] }
    default:
      return state;
  }
};
