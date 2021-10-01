import { createAction } from './actionCreator';
import { VITYA_DISLIKE_TYPES } from './types'

export const setDislike = createAction(VITYA_DISLIKE_TYPES.DISLIKE_ON)
export const unsetDislike = createAction(VITYA_DISLIKE_TYPES.DISLIKE_OFF)
