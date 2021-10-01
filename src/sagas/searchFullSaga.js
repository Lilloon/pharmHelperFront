import {
  put, takeLatest,
} from 'redux-saga/effects';
import restAPI from '../utils/rest';
import { FetchSearchFullSucceeded, setFullSearch, FetchSearchFullFailed } from '../actions/sagas/drugsAction'
import { SET_DRUGS_TYPES } from '../actions/types'
import { unsetLoad } from '../actions/LoadScreenAction'

function* fetchSearchDrugFull(value) {
  try {
    const user = yield restAPI.drugs.getFullSearch(value.$payload);
    yield put(setFullSearch(user.data));
    yield put(unsetLoad())
    yield put(FetchSearchFullSucceeded(user));
  } catch (e) {
    yield put(FetchSearchFullFailed(e.message));
  }
}

export const searchFullDrug = [
  takeLatest(SET_DRUGS_TYPES.SEARCH_DRUGS_FULL_REQUESTED, fetchSearchDrugFull)]
