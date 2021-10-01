import {
  put, takeLatest,
} from 'redux-saga/effects';
import restAPI from '../utils/rest';
import { FetchSearchSucceeded, setSearchList, FetchPopularFailed } from '../actions/sagas/drugsAction'
import { SET_DRUGS_TYPES } from '../actions/types'
import { unsetLoad } from '../actions/LoadScreenAction'

function* fetchSearchDrugs(obj) {
  try {
    const user = yield restAPI.drugs.getSearch(obj.$payload.searchValue, obj.$payload.link);
    yield put(setSearchList(user.data))
    yield put(unsetLoad())
    yield put(FetchSearchSucceeded(user));
  } catch (e) {
    yield put(FetchPopularFailed(e.message));
  }
}

export const searchSaga = [
  takeLatest(SET_DRUGS_TYPES.SEARCH_DRUGS_REQUESTED, fetchSearchDrugs)]
