import {
  put, takeLatest,
} from 'redux-saga/effects';
import restAPI from '../utils/rest';
import { FetchAnalogsSucceeded, setAnalogs, FetchAnalogsFailed } from '../actions/sagas/drugsAction'
import { SET_DRUGS_TYPES } from '../actions/types'
import { unsetLoad } from '../actions/LoadScreenAction'

function* fetchAnalogs(value) {
  try {
    const user = yield restAPI.drugs.getAnalogs(value.$payload.id, value.$payload.page);
    yield put(setAnalogs(user.data));
    yield put(unsetLoad())
    yield put(FetchAnalogsSucceeded(user));
  } catch (e) {
    yield put(FetchAnalogsFailed(e.message));
  }
}

export const searchAnalogs = [
  takeLatest(SET_DRUGS_TYPES.GET_ANALOGS_REQUESTED, fetchAnalogs)]
