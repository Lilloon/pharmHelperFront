import { createAction } from './actionCreator';
import { LOADSCREEN_TYPES } from './types'

export const setLoad = createAction(LOADSCREEN_TYPES.LOADSCREEN_ON)
export const unsetLoad = createAction(LOADSCREEN_TYPES.LOADSCREEN_OFF)
