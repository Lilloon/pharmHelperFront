import { createAction } from './actionCreator';
import { CLEARFULLDRUG_TYPE } from './types'

export const clear = createAction(CLEARFULLDRUG_TYPE.CLEAR)
