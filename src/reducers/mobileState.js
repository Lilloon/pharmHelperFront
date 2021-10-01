import { SETMOBILE_SWITCH_TYPES } from '../actions/types'

const defaultState = {
  mobileState: false,
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SETMOBILE_SWITCH_TYPES.SETMOBILE_SWITCH:
      return { ...state, mobileState: !state.mobileState }
    default:
      return state;
  }
};
