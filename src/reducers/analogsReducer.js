import { SET_DRUGS_TYPES } from '../actions/types'

const defaultState = {
  analogs: {},
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_DRUGS_TYPES.SET_ANALOGS:
      return { ...state, analogs: action?.$payload }
    default:
      return state;
  }
};
