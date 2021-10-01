import { SET_DRUGS_TYPES } from '../actions/types'

const defaultState = {
  PopularDrugs: [],
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_DRUGS_TYPES.SET_DRUGS:
      return { ...state, PopularDrugs: action?.$payload }
    default:
      return state;
  }
};
