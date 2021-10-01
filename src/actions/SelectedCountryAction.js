import { createAction } from './actionCreator';
import { SELECTED_COUNTRY_TYPES } from './types'

export const setSelectedCountry = createAction(SELECTED_COUNTRY_TYPES.SET_SELECTED_VAULUE)
export const clearSelectedCountry = createAction(SELECTED_COUNTRY_TYPES.CLEAR_SELECTED_VALUE)
