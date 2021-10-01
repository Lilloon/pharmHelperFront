import { createAction } from './actionCreator';
import { SET_POPULARCHECK_TYPES } from './types'

export const checkPopular = createAction(SET_POPULARCHECK_TYPES.SET_POPULARCHECK)
export const clearPopularCheck = createAction(SET_POPULARCHECK_TYPES.CLEAR);
