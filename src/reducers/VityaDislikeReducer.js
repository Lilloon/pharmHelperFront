import { VITYA_DISLIKE_TYPES } from '../actions/types'

const defaultState = {
  DislikeState: false,
}

export default (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case VITYA_DISLIKE_TYPES.DISLIKE_ON:
      return { ...state, DislikeState: true }
    case VITYA_DISLIKE_TYPES.DISLIKE_OFF:
      return { ...state, DislikeState: false }
    default:
      return state;
  }
};
