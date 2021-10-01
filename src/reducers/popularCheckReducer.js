import { SET_POPULARCHECK_TYPES } from '../actions/types'

const defaultState = {
  popularCheck: 'all',
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_POPULARCHECK_TYPES.SET_POPULARCHECK:
      return { ...state, popularCheck: action?.$payload }
    case SET_POPULARCHECK_TYPES.CLEAR:
      return defaultState
    default:
      return state;
  }
};
