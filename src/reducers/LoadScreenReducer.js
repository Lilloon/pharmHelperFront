import { LOADSCREEN_TYPES } from '../actions/types'

const defaultState = {
  LoadScreenState: false,
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case LOADSCREEN_TYPES.LOADSCREEN_ON:
      return { ...state, LoadScreenState: true }
    case LOADSCREEN_TYPES.LOADSCREEN_OFF:
      return { ...state, LoadScreenState: false }
    default:
      return state;
  }
};
