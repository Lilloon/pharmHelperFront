import { SETMENU_SWITCH_TYPES } from '../actions/types'

const defaultState = {
  menuState: false,
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SETMENU_SWITCH_TYPES.SETMENU_SWITCH:
      return { ...state, menuState: !state.menuState }
    default:
      return state;
  }
};
