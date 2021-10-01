import { SET_DRUGS_TYPES } from '../actions/types'

const defaultState = {
  pictures: [],
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_DRUGS_TYPES.SET_PICTURES:
      return { ...state, pictures: action?.$payload }
    default:
      return state;
  }
};
